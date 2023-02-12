import React from 'react';
import Arrow1 from "../../../public/images/l/arr1.png";
import Arrow2 from "../../../public/images/l/arr2.png";
import Image1 from "../../../public/images/l/etl_7l.jpg";
import Image2 from "../../../public/images/l/l8.jpg";
import Image3 from "../../../public/images/l/l1.png";
import Image4 from "../../../public/images/l/l2.jpg";
import Image5 from "../../../public/images/l/l3.jpg";
import Image6 from "../../../public/images/l/l4.jpg";
import Image7 from "../../../public/images/l/l5.jpg";
import Image8 from "../../../public/images/l/l6.jpg";

const slides = [
    {
      title: "Machu Picchu",
      subtitle: "Peru",
      description: "Adventure is never far away",
      image: Image1,
    },
    {
      title: "Chamonix",
      subtitle: "France",
      description: "Let your dreams come true",
      image: Image2,
    },
    {
      title: "Mimisa Rocks",
      subtitle: "Australia",
      description: "A piece of heaven",
      image: Image3,
    },
    {
      title: "Four",
      subtitle: "Australia",
      description: "A piece of heaven",
      image: Image4,
    },
    {
      title: "Five",
      subtitle: "Australia",
      description: "A piece of heaven",
      image: Image5,
    },
    {
      title: "Five",
      subtitle: "Australia",
      description: "A piece of heaven",
      image: Image6,
    },
    {
      title: "Five",
      subtitle: "Australia",
      description: "A piece of heaven",
      image: Image7,
    },
    {
      title: "Five",
      subtitle: "Australia",
      description: "A piece of heaven",
      image: Image8,
    },
  ];
  
  function useTilt(active) {
    const ref = React.useRef(null);
  
    React.useEffect(() => {
      if (!ref.current || !active) {
        return;
      }
  
      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined,
      };
  
      let el = ref.current;
  
      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;
  
        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };
  
      el.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);
  
    return ref;
  }
  
  const initialState = {
    slideIndex: 0,
  };
  
  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length,
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
      };
    }
  };
  
  function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
  
    return (
      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
        }}
      >
        <div
          className="slideBackground"
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        />
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        >
          {/* <div className="slideContentInner">
            <h2 className="slideTitle">{slide.title}</h2>
            <h3 className="slideSubtitle">{slide.subtitle}</h3>
            <p className="slideDescription">{slide.description}</p>
          </div> */}
        </div>
      </div>
    );
  }

const PhotoStream = () => {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);
    return (
        <div>
            <div>
                <h3 className='text-center what-we pt-5'>Photo stream</h3>
                <hr className='hr-2' />
            </div>
            <div>
            <section className="slider_bg">
                <div className="slider_section">
                <div className="silder_main">
                    <div className="slides">
                    {[...slides, ...slides, ...slides].map((slide, i) => {
                        let offset = slides.length + (state.slideIndex - i);
                        return <Slide slide={slide} offset={offset} key={i} />;
                    })}
                    </div>
                </div>

                <div className="main_btns">
                    <button onClick={() => dispatch({ type: "PREV" })}>
                    <img src={Arrow1} alt="" />
                    </button>
                    <button onClick={() => dispatch({ type: "NEXT" })}>
                    <img src={Arrow2} alt="" />
                    </button>
                </div>
                </div>
            </section>
            </div>

        </div>
    );
};

export default PhotoStream;