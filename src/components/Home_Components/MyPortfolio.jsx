import data from "../../Data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
  <a href="https://github.com/Dikshit-Sharma/" alt="Github" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
    <button className="btn btn-github">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36" // Increased width
        height="36" // Increased height
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 0C5.37 0 0 5.37 0 12C0 17.37 3.435 21.885 8.205 23.31C8.805 23.43 9.015 23.025 9.015 22.71C9.015 22.425 9.015 21.405 9.015 20.295C6 21 5.34 19.245 5.34 19.245C4.74 17.925 3.81 17.415 3.81 17.415C2.49 16.5 3.87 16.515 3.87 16.515C5.295 16.56 6.15 17.775 6.15 17.775C7.185 19.215 8.805 18.75 9.045 18.54C9.12 17.715 9.405 17.25 9.63 17.01C7.17 16.785 4.41 15.81 4.41 11.37C4.41 10.065 4.86 8.985 5.58 8.145C5.46 7.875 5.04 6.63 5.67 4.965C5.67 4.965 6.63 4.635 9.015 6.075C9.99 5.775 11.01 5.64 12.015 5.64C13.02 5.64 14.01 5.775 14.985 6.075C17.37 4.635 18.33 4.965 18.33 4.965C18.96 6.63 18.54 7.875 18.42 8.145C19.14 8.985 19.59 10.065 19.59 11.37C19.59 15.825 16.83 16.785 14.37 17.01C14.67 17.445 14.985 18.495 14.985 19.83C14.985 21.12 14.985 22.11 14.985 22.71C14.985 23.04 15.195 23.43 15.81 23.31C20.565 21.885 24 17.37 24 12C24 5.37 18.63 0 12 0Z"
          fill="currentColor"
        />
      </svg>
      Visit My GitHub
    </button>
  </a>
</div>

      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" style={{borderRadius: "5px"}}/>
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.link && (
                  <a
                    href={item.link_add}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    {item.link}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
