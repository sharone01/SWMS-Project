// const reports = [
//   { id: 1, type: "Plastic", location: "Main Street", status: "Pending" },
//   { id: 2, type: "Household", location: "Green Park", status: "Resolved" },
// ];

// function Dashboard() {
//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">Reports Dashboard</h2>
//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th>ID</th><th>Type</th><th>Location</th><th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reports.map(report => (
//             <tr key={report.id} className="border-b">
//               <td>{report.id}</td>
//               <td>{report.type}</td>
//               <td>{report.location}</td>
//               <td>{report.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// export default Dashboard 

import { fetchReports } from "../api";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports().then(setReports);
  }, []);

  return (
    <div>
      {reports.map((r) => (
        <div key={r._id}>
          {r.wasteType} - {r.status}
        </div>
      ))}
    </div>
  );
};
 export default Dashboard

