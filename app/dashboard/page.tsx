import Image from "next/image";

export default function UserPage() {
  return (
    <view>
      <div className="container bg-light mt-2 rounded-2 p-2">
        <nav className="navbar bg-body-tertiary">
          <form className="container-fluid justify-content-start">
            <button
              className="btn btn-outline-success me-2 rounded-5"
              type="button"
            >
              Kesehatan
            </button>
            <button
              className="btn  btn-outline-secondary  rounded-5"
              type="button"
            >
              Teknologi
            </button>
          </form>
        </nav>
      </div>
      <div className="container bg-light mt-2 rounded-2 p-2">
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <Image
                src="/profile.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </view>
  );
}
