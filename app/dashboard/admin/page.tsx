"use client";
import axios from "axios";
import { useEffect, useState } from "react";
export default function AdminPage() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3001/api/users");
        setData(response.data);
      } catch (error) {
        console.error("Kesalahan:", error);
      }
    }
    fetchData();
  });
  return (
    <view>
      <div className="bg-light container mt-2 p-4">
        <div>
          <div className="row">
            <div className="col">
              <a className="btn btn-primary" href="">
                Tambah User
              </a>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Id</th>
                <th>Nama</th>
                <th>Username</th>
                <th>Email</th>
                <th>Rules</th>
                <th colSpan={2} className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((user: any, i: any) => (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{user.id}</td>
                  <td>{user.nama}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.roles}</td>
                  <td>
                    <a className="btn btn-warning" href="">
                      Edit
                    </a>
                  </td>
                  <td>
                    <a className="btn btn-danger" href="">
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </view>
  );
}
