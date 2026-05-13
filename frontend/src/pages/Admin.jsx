import { useEffect, useState } from "react";
import getApiBase from "../utils/api";

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          `${getApiBase()}/api/contact/getContactInfo`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch contacts.");
        }

        setContacts(data);
        setStatus("ready");
      } catch (error) {
        setStatus("error");
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Contact Submissions</h1>
        <p>Latest inquiries from the landing page form.</p>
      </div>

      {status === "loading" && <p>Loading contacts...</p>}
      {status === "error" && (
        <p className="form-error">Unable to load contacts right now.</p>
      )}

      {status === "ready" && (
        <div className="admin-table">
          <div className="admin-row admin-head">
            <span>Name</span>
            <span>Email</span>
            <span>Message</span>
            <span>Created</span>
          </div>
          {contacts.map((contact) => (
            <div key={contact._id} className="admin-row">
              <span>{contact.fullName}</span>
              <span>{contact.email}</span>
              <span>{contact.description}</span>
              <span>
                {new Date(contact.createdAt).toLocaleString("en-US")}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
