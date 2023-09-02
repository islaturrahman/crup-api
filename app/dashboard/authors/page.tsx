export default function AuthorsPage() {
  return (
    <view>
      <div className="container mt-2 bg-light p-4">
        <a className="btn btn-primary">Tambah Artikel</a>
        <div className="mt-2">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Description</th>
                <th>authors</th>
                <th>Created</th>
                <th>Content</th>
                <th>Banner</th>
                <th colSpan={2} className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Buah yang hilang</td>
                <td>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </td>
                <td>islaturr</td>
                <td>02-12-2023</td>
                <td>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magnam repellendus rem quo iusto sequi aliquam quas fuga
                </td>
                <td>Image</td>
                <td>
                  <a className="btn btn-warning">Edit</a>
                </td>
                <td>
                  <a className="btn btn-danger">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </view>
  );
}
