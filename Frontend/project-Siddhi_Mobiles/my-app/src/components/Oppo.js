import React from "react";

export default function Oppo() {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <div className="container " />
        <div
          style={{
            boxShadow: "2cm",
            textShadow: "2cm",
            color: "rgb(4, 4, 10)",
            textAlign: "center",
          }}
        >
          <b>
            {" "}
            <h1>Oppo Product</h1>
          </b>
        </div>
        <b>
          <h4 style={{ textAlign: "center" }}>
            <b>
              <u> Oppo Mobile</u>
            </b>
          </h4>
          <br />
          <div
            className=" col-10 row mb-5 margin-bottom:auto "
            style={{ paddingLeft: "15%" }}
          >
            <table className="table table-bordered">
              <thead className="border border-secondary, table-dark">
                <tr>
                  <th scope="col">Images</th>
                  <th scope="col">Names</th>
                  <th scope="col">Description</th>
                  <th scope="col">Color</th>
                  <th scope="col">Add to Cart</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>image1</td>
                  <td>
                    Oppo <br />
                  </td>
                  <td>
                    A17 K (3+64GB)
                    <br />{" "}
                  </td>
                  <td>
                    Blue
                    <br />
                    Gold
                    <br /> Navy Blue
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image1</td>
                  <td>
                    Oppo <br />
                  </td>
                  <td>
                    A17 (4+64GB)
                    <br />{" "}
                  </td>
                  <td>
                    Blue
                    <br />
                    Gold
                    <br /> Navy Blue
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image2</td>
                  <td>
                    Oppo
                    <br />
                  </td>
                  <td>
                    A18 (4+64)
                    <br />{" "}
                  </td>
                  <td>
                    Glowin Black
                    <br />
                    Glowing Blue
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image3</td>
                  <td>
                    Oppo <br />
                  </td>
                  <td>
                    A18 (4+128)
                    <br />{" "}
                  </td>
                  <td>
                    Glowin Black
                    <br />
                    Glowing Blue
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image3</td>
                  <td>
                    Oppo <br />
                  </td>
                  <td>
                    A57 (4/64)
                    <br />{" "}
                  </td>
                  <td>
                    Glowin Black
                    <br />
                    Glowing Green
                    <br />
                    Glowing Blue
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image3</td>
                  <td>
                    Oppo <br />
                  </td>
                  <td>
                    A57 (4/64)
                    <br />{" "}
                  </td>
                  <td>
                    Glowin Black
                    <br />
                    Glowing Green
                    <br />
                    Glowing Blue
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>image3</td>
                  <td>
                    Oppo <br />
                  </td>
                  <td>
                    RENO 10 (8+256)
                    <br />{" "}
                  </td>
                  <td>
                    Glowin Black
                    <br />
                    Glowing Green
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger" type="submit">
                      ADD
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b>
      </>
    </div>
  );
}
