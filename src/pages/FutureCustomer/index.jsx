import React from "react";
import css from "./style.module.css";
import FutureAgent1 from "../../assets/images/futureAgent1.jpg";
import FutureAgent2 from "../../assets/images/futureAgent2.jpg";

const FutureCustomer = () => {
  return (
    <div className={css.container}>
      <div className={css.fadeInText}>
        <h1 className={css.title}>Ирээдүйн борлуулалтын төлөөлөгчдөд</h1>
        <p>
          Үл хөдлөх хөрөнгийн төлөөлөгчийн ажлын гол үүрэг нь харилцагч,
          үйлчлүүлэгчдийн хэрэгцээт борлуулалт, худалдан авалтыг удирдан
          гүйцэтгэх, гэрээ хэлцлийг эрх зүйн хүрээнд зөв хийж, борлуулалт болон
          түрээсийн хэлцлийг амжилттай хааж дуусгах явдал юм. Дээрх ажлуудыг
          гүйцэтгэхэд борлуулах үл хөдлөх хөрөнгийн жагсаалтыг гаргах, худалдагч
          болон худалдан авагчидтэй ажиллах, ирээдүйн харилцагчидтэй уулзаж
          ярилцах, худалдан авах эзэмшилд дагуулж явах, тэднийг зөв мэдээллээр
          хангах, борлуулалтын нөхцөл байдлын талаар үнэн зөв мэдээллээр тэднийг
          хангах, мөн шат дараалсан олон алхам бүхий борлуулалтын гэрээг
          гүйцэтгэх, борлуулалтын баримт бичгийн бүрдлийг хангах зэрэгт суралцах
          шаардлагатай болно.{" "}
        </p>
        <p>
          Таныг үл хөдлөх хөрөнгийн чадварлаг төлөөлөгч болоход чухал 6
          алхамуудыг амжилттай даван туулахад бид тусална. Үүнд:{" "}
        </p>
        <ul>
          <li>Зөв мэдлэг боловсролыг зөв эх сурвалжаас эзэмших</li>
          <li>Мэргэжлийн чадамжийн гэрчилгээ авах</li>
          <li>Зөв, чадварлаг брокертэй ажиллах</li>
          <li>Борлуулалтын төлөөлөгчийн төсөвтэй болох</li>
          <li>Өөрийн үйлчлүүлэгчдийн мэдээллийн сантай болох</li>
          <li>Борлуулалтын ажлаа эхлэх</li>
        </ul>
        <p>
          Дээр дурдсан бүхнийг бид зааж сургаж, төлөөлөгчдөд мэргэжлийн гүнзгий
          мэдлэг, ажлын арга барил, арга зүйн болон техникийн мэдэгдэхүүнийг
          олгож чадна гэдгээ РЭНЦ’О ЭСТЭЙТ ХХК ба түүний чадварлаг хамт олон
          үүгээр баталгаажуулж байна.{" "}
        </p>
        <p>Бидэнтэй холбогд. Бид хамгийн сайн хамт олон чинь байх болно!</p>
        <div className={css.address}>
          <h1 className={css.addressName}>
            Үндэсний Үл Хөдлөх Хөрөнгийн РЭНЦ’О ЭСТЭЙТ ХХК
          </h1>
          <a href="https://goo.gl/maps/eqfbHddcxaWuVEqGA">
            <p style={{ textAlign: "left" }}>
              Улаанбаатар хот, Сүхбаатар дүүрэг, 1 дүгээр хороо, Чин Ван
              Чагдаржавын гудамж- 27, Их Хөлгөн Бизнес төв, #4-3 тоот
            </p>
          </a>
          <a href="tel:88335696">
            <p style={{ textAlign: "left" }}>
              Утас: 88335696, 88624882, 89988554, 99535551, 91007240
            </p>
          </a>
          <a href="mailto:broker@rentsoestate.mn?subject=your title&body=TThe message">
            <p style={{ textAlign: "left" }}>
              Цахим шуудан: broker@rentsoestate.mn
            </p>
          </a>
          <a href="https://www.rentsoestate.mn">
            <p style={{ textAlign: "left" }}>
              Цахим хуудас: www.rentsoestate.mn
            </p>
          </a>
          <a href="https://www.mongoloju.mn">
            <p style={{ textAlign: "left" }}>Цахим хуудас: www.mongoloju.mn</p>
          </a>
        </div>
        <div className={css.images}>
          <img src={FutureAgent1} alt="FutureAgent1" className={css.image} />
          <img src={FutureAgent2} alt="FutureAgent2" className={css.image} />
        </div>
      </div>
    </div>
  );
};

export default FutureCustomer;
