import "./PortfoliosNav.scss";

export default function PortfoliosNav({ portfoliosData, option, setOption }) {
  const createRipple = (event) => {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight); 
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  const optionClick = (option, e) => {
    createRipple(e);
    setOption(option);
  };

  return (
    <div className="portfolios-nav">
      <div className="portfolios-nav">
        <button
          className={option === "all" ? "option active" : "option"}
          onClick={(e) => optionClick("all", e)}
        >
          all
        </button>
        {portfoliosData.map((data, index) => (
          <button
            key={index}
            className={option === data.type ? "option active" : "option"}
            onClick={(e) => optionClick(data.type, e)}
          >
            {data.type}
          </button>
        ))}
      </div>
    </div>
  );
}
