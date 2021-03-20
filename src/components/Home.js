
import "./Home.css"
import "../index.css"

function Home(props) {
  return(
    <div className="home">
      <div className="home-config">
        <div className="glass-component panel">
          <h2 className="panel-title">ROS CONNECTION</h2>
          <table className="home-table">
            <tbody>
              <tr>
                <td className="home-table-label">STATUS:</td>
                <td>{props.status ? "CONNECTED" : "NOT CONNECTED" }</td>
              </tr>
              <tr>
                <td className="home-table-label">IP:</td>
                <td>{props.status ? props.ip : "N/A"}</td>
              </tr>
              <tr>
                <td className="home-table-label">PORT:</td>
                <td>{props.status ? props.port : "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="glass-component panel">
          <h2 className="panel-title">DATA ACQUISITION</h2>
          <table className="home-table">
            <tbody>
              <tr>
                <td className="home-table-label">STATUS:</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td className="home-table-label">TYPE:</td>
                <td>LINE</td>
              </tr>
              <tr>
                <td className="home-table-label">START X:</td>
                <td>Mundo</td>
              </tr>
              <tr>
                <td className="home-table-label">START Y:</td>
                <td>Mundo</td>
              </tr>
              <tr>
                <td className="home-table-label">END X:</td>
                <td>Mundo</td>
              </tr>
              <tr>
                <td className="home-table-label">END Y:</td>
                <td>Mundo</td>
              </tr>
              { props.type === "line" ? 
                <tr>
                  <td className="home-table-label">POINTS:</td>
                  <td>N/A</td>
                </tr>
                :
                <>
                  <tr>
                    <td className="home-table-label">POINTS X:</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td className="home-table-label">POINTS X:</td>
                    <td>N/A</td>
                  </tr>
                </>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
