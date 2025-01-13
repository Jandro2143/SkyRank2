import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header"; // Import your Header component
import "../css/portal.css"; // Updated CSS file

export default function Portal() {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all"); // For tab selection

  // Define the valid statuses here so they are accessible throughout the component
  const validStatuses = ["To Do", "In Progress", "Done", "Follow Up"];

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const AIRTABLE_BASE = "appjBE1cS049PHpg6"; // Replace with your Base ID
        const AIRTABLE_TABLE = "Clients"; // Replace with your Table Name
        const AIRTABLE_API_KEY =
          "patu3ckkjrFVR855b.cfa6221346f5cc550a8d144f015ff8645ff0347e7dfb475ae3f852e139356223"; // Replace with your API Key

        const url = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`;

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          },
        });

        setClients(response.data.records);
        setFilteredClients(response.data.records); // Initially show all clients
      } catch (err) {
        console.error("Error fetching clients:", err);
      }
    };

    fetchClients();
  }, []);

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

      // Validate the new status
      const validatedStatus = validStatuses.find(
        (status) => status.toLowerCase() === newStatus.trim().toLowerCase()
      );

      if (!validatedStatus) {
        throw new Error(
          `Invalid status: "${newStatus}". Allowed values are: ${validStatuses.join(", ")}`
        );
      }

      console.log("Updating client ID:", clientId);
      console.log("Validated status:", validatedStatus);

      const payload = {
        fields: {
          Status: validatedStatus,
        },
      };

      const response = await axios.patch(url, payload, {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Airtable response:", response.data);

      // Update the local state
      setClients((prevClients) =>
        prevClients.map((client) =>
          client.id === clientId
            ? { ...client, fields: { ...client.fields, Status: validatedStatus } }
            : client
        )
      );
    } catch (err) {
      console.error("Error updating status in Airtable:", err.response?.data || err.message);
    }
  };

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
