import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header"; // Adjust path as needed

export default function PortalPage() {
  const router = useRouter();
  const { uniqueId } = router.query; // Get the uniqueId from the URL
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");
  const [isValidUser, setIsValidUser] = useState(false); // Check if the uniqueId is valid
  const [loading, setLoading] = useState(true); // Manage loading state

  const validStatuses = ["To Do", "In Progress", "Done", "Follow Up"];

  useEffect(() => {
    if (!uniqueId) return; // Wait until uniqueId is available

    const validateUserAndFetchClients = async () => {
      try {
        const AIRTABLE_BASE = "appjBE1cS049PHpg6"; // Replace with your Base ID
        const AIRTABLE_USERS_TABLE = "User"; // Replace with your User Table Name
        const AIRTABLE_CLIENTS_TABLE = "Clients"; // Replace with your Clients Table Name
        const AIRTABLE_API_KEY =
          "patu3ckkjrFVR855b.cfa6221346f5cc550a8d144f015ff8645ff0347e7dfb475ae3f852e139356223"; // Replace with your API Key

        const userUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_USERS_TABLE}`;
        const clientsUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_CLIENTS_TABLE}`;

        // Validate uniqueId against User table
        const userResponse = await axios.get(userUrl, {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          },
        });

        const users = userResponse.data.records;
        const user = users.find((record) => record.fields.uniqueId === uniqueId);

        if (!user) {
          alert("Invalid or unauthorized access.");
          router.push("/signin");
          return;
        }

        setIsValidUser(true);

        // Fetch clients for valid users
        const clientsResponse = await axios.get(clientsUrl, {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          },
        });

        setClients(clientsResponse.data.records);
        setFilteredClients(clientsResponse.data.records); // Initially show all clients
      } catch (err) {
        console.error("Error validating user or fetching clients:", err);
        alert("Error fetching data. Please try again.");
        router.push("/signin");
      } finally {
        setLoading(false);
      }
    };

    validateUserAndFetchClients();
  }, [uniqueId, router]);

  const handleTabChange = (status) => {
    setSelectedTab(status);

    if (status === "all") {
      setFilteredClients(clients);
    } else {
      setFilteredClients(
        clients.filter(
          (client) =>
            client.fields["Status"]?.toLowerCase() === status.toLowerCase()
        )
      );
    }
  };

  const handleStatusChange = async (clientId, newStatus) => {
    try {
      const AIRTABLE_BASE = "appjBE1cS049PHpg6";
      const AIRTABLE_TABLE = "Clients";
      const AIRTABLE_API_KEY =
        "patu3ckkjrFVR855b.cfa6221346f5cc550a8d144f015ff8645ff0347e7dfb475ae3f852e139356223";

      const url = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}/${clientId}`;

      const validatedStatus = validStatuses.find(
        (status) => status.toLowerCase() === newStatus.trim().toLowerCase()
      );

      if (!validatedStatus) {
        throw new Error(
          `Invalid status: "${newStatus}". Allowed values are: ${validStatuses.join(", ")}`
        );
      }

      const payload = {
        fields: {
          Status: validatedStatus,
        },
      };

      await axios.patch(url, payload, {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      });

      setClients((prevClients) =>
        prevClients.map((client) =>
          client.id === clientId
            ? { ...client, fields: { ...client.fields, Status: validatedStatus } }
            : client
        )
      );
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Show loading message while validating user
  }

  if (!isValidUser) {
    return <p>Unauthorized access. Redirecting...</p>; // Show a message for invalid users
  }

  return (
    <div>
      <Header /> {/* Render the header component */}
      <div className="portal-container">
        <h2 className="portal-title">All Clients</h2>

        {/* Tabs for filtering */}
        <div className="tabs">
          {["all", "in progress", "to do", "done", "follow up"].map((tab) => (
            <button
              key={tab}
              className={`tab-button ${selectedTab === tab ? "active" : ""}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Table Container */}
        <div className="client-table-container">
          {filteredClients.length > 0 ? (
            <table className="client-table">
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Website</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Industry</th>
                  <th>SEO Score</th>
                  <th>Critical Errors</th>
                  <th>Site Speed</th>
                  <th>Backlinks</th>
                  <th>Traffic</th>
                  <th>Recommended Services</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client) => (
                  <tr key={client.id}>
                    <td>{client.fields["Client Name"] || "N/A"}</td>
                    <td>
                      <a
                        href={`https://${client.fields["Website"]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="website-link"
                      >
                        {client.fields["Website"] || "N/A"}
                      </a>
                    </td>
                    <td>{client.fields["Email"] || "N/A"}</td>
                    <td>{client.fields["Phone Number"] || "N/A"}</td>
                    <td>{client.fields["Industry"] || "N/A"}</td>
                    <td>{client.fields["SEO Score"] || "N/A"}</td>
                    <td>{client.fields["Critical Errors"] || "N/A"}</td>
                    <td>{client.fields["Site Speed"] || "N/A"}</td>
                    <td>{client.fields["Backlinks"] || "N/A"}</td>
                    <td>{client.fields["Traffic"] || "N/A"}</td>
                    <td>{client.fields["Recommended Services"] || "N/A"}</td>
                    <td>
                      <select
                        value={client.fields["Status"] || "N/A"}
                        onChange={(e) =>
                          handleStatusChange(client.id, e.target.value)
                        }
                        className="status-dropdown"
                      >
                        {validStatuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-data-message">No clients found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
