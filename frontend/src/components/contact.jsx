import { Link } from "react-router";

const Contact = () => {
  return (
    <div>
      <form>
        <div className="d-flex justify-content-space-between gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="cols-80 p-3 rounded-3 form-control"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="cols-80 p-3 rounded-3 form-control"
          />
        </div>
        <br />
        <input
          type="email"
          placeholder="Email Address"
          className="cols-200 p-3 rounded-3 form-control"
        />
        <br />
        <br />
        <input
          type="tel"
          placeholder="Phone number"
          className="cols-200 p-3 rounded-3 form-control"
        />
        <br />
        <br />

        <div className="d-flex justify-content-space-between gap-4">
          <select
            id="service"
            placeholder="Service"
            className="cols-80 p-3 rounded-3"
          >
            <option value="Service">Service </option>
            <option value="Bulk Pickup">Bulk Pickup </option>
            <option value="Nutrition Counseling">Dumpster Rentals</option>
            <option value="Group Coaching Services">Waste Removal</option>
          </select>
          <input
            type="date"
            placeholder="mm/dd/yyyy"
            className="cols-80 p-3 rounded-3 form-control"
          />
        </div>
        <br />
        <br />

        <button className=" ">
          <Link to="/landing"> Book A Service</Link>
        </button>
      </form>
    </div>
  );
};
export default Contact;
