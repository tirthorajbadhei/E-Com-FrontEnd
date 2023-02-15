import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Men = () => {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000 });
    setLoad(true);
    axios
      .get("https://long-blue-antelope-slip.cyclic.app/men")
      .then((r) => setProduct(r.data))
      .catch((e) => console.log(e));
    setLoad(false);
  }, []);
  console.log(product);
  if (load) {
    return (
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        est iste placeat sint facilis. Sequi labore non, cupiditate iste aliquid
        vero nemo sapiente mollitia fuga similique ex voluptas possimus illo.
        Praesentium iste blanditiis natus rem inventore deleniti minima vel,
        corrupti, quaerat laudantium animi sint ab! Officiis nobis,
        reprehenderit harum rerum magnam, beatae necessitatibus iure, quis dicta
        libero illo tempora maiores. Aspernatur autem temporibus earum dolorem
        quo, quis facilis optio quaerat, incidunt impedit voluptates veniam
        laboriosam suscipit, eius fuga illo dignissimos maiores placeat
        laudantium at? Quos minus molestias tempore voluptatibus enim! Magnam
        corporis veniam fuga error ipsam cum quibusdam distinctio adipisci.
        Aperiam, animi sed rem necessitatibus vel fugiat cupiditate unde
        excepturi ducimus dicta ut consectetur dolorum voluptas doloribus, ab
        veritatis nulla? Totam omnis ipsam sapiente quaerat similique, rerum
        quibusdam facilis assumenda dolorum quis unde explicabo aliquid animi
        illo atque accusamus vitae amet inventore eos quam necessitatibus nisi
        ducimus repellendus. Corrupti, temporibus. Quaerat quas repudiandae
        natus labore enim fuga, incidunt est mollitia porro animi obcaecati
        nobis ullam iusto reiciendis nihil doloremque asperiores modi ducimus
        iure ex! Consequatur, asperiores facere. Iusto, maxime numquam.
        Architecto laudantium fugiat exercitationem nobis quia fuga cum, quaerat
        eum nesciunt ducimus omnis eveniet iusto laboriosam, facere perferendis?
        Maiores eius similique eos odio ad, illum pariatur optio commodi ratione
        facere! Nihil perferendis facere minima expedita maxime ea dignissimos
        odit officiis enim reiciendis fugiat quaerat, voluptatum illo! Vitae
        quis iste fugit enim blanditiis quisquam impedit reprehenderit quod,
        dignissimos qui, fuga ipsum. Repudiandae et nihil velit nisi tempore
        voluptate, ducimus ipsa quam minus non explicabo accusamus perspiciatis
        soluta dolorum obcaecati dicta? Repellendus tenetur sit voluptates odio?
        Provident illo maxime fugiat accusantium eligendi? Consequatur assumenda
        repellendus modi libero qui, eum magni, at vel ullam cupiditate
        inventore mollitia iste itaque sunt deserunt ipsum suscipit unde ratione
        blanditiis aut sint molestias in ipsa. Odio, amet?
      </h1>
    );
  }
  return (
    <div className="product_img">
      {product.map((r) => {
        return (
          <div data-aos="zoom-in" className="col-sm product_div" key={r._id}>
            <a className="text" href={`/men/product/${r._id}`}>
              <img src={r.img_responsive} alt="" />
              <h5>{r.product_brand}</h5>
              <p>{r.product_name}</p>
              <span>
                Price<span className="price"> {r.product_strike}</span>||
                <span className="price1"> {r.product_discountedPrice}</span>
                ||
                <span className="price1"> {r.product_discountPercentage}</span>
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Men;
