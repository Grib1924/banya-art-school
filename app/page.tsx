import Image from "next/image";
import SignupForm from "./SignupForm";
import SiteHeader from "./SiteHeader";

const benefits = [
  "Чтобы начать, не нужно уметь рисовать — большинство учеников приходят с нуля",
  "Мы не оцениваем и не сравниваем: каждый рисует в своём темпе",
  "Объясняем законы рисунка, композиции и колористики простым языком и без лишней теории",
  "К нам приходят расслабиться после работы и учёбы",
  "Вечерние группы и занятия в выходные легко встроить в плотный график",
  "Отмечаем в абонементе только те занятия, которые вы посетили",
  "Ездим на пленэры, ходим вместе в музеи и участвуем в выставках",
];

const courses = [
  { title: "Базовый курс", image: "/assets/adult-6.jpg", meta: "24 занятия", text: "Научитесь рисовать объёмно что угодно. Вся база рисования — без занудных заданий: нескучные натюрморты, пейзажи, построение, тон, цвет и композиция." },
  { title: "Портрет", image: "/assets/adult-5.jpg", meta: "16 занятий", text: "Научитесь рисовать портрет пропорциональным и объёмным, узнаете, что влияет на похожесть, и изучите анатомию лица в разных ракурсах." },
  { title: "Пейзаж", image: "/assets/adult-4.jpg", meta: "16 занятий", text: "Изучите особенности пейзажа, научитесь создавать объём и глубину с помощью воздушной перспективы, передавать погоду и настроение." },
  { title: "Масло или акварель", image: "/assets/adult-1.jpg", meta: "16 занятий", text: "Изучите особенности выбранного материала и научитесь им управлять: освоите техники, смешивание красок и подбор цвета." },
  { title: "Свободная программа", image: "/assets/adult-3.jpg", meta: "в вашем темпе", text: "Не нашли подходящий курс? Составим индивидуальный план занятий под вас, ваши интересы и творческие запросы." },
];

const steps = [
  "Выбираете удобное время",
  "Администратор подбирает группу по уровню и целям",
  "Знакомитесь с педагогом, рассказываете о запросах и рисуете простой натюрморт с подробными объяснениями",
  "Преподаватель помогает выбрать направление и подсказывает, с чего начать",
  "Если мы подходим друг другу, выбираете абонемент и становитесь частью творческого сообщества",
];

const reviews = [
  { name: "Ульяна Тырина", source: "Яндекс Карты", text: "Мне нравится заниматься в студии «Баня». Благодаря занятиям у меня появилась надежда осуществить мечту — научиться чувствовать пространство и выражать идеи на бумаге." },
  { name: "Александра Хохловская", source: "Яндекс Карты", text: "Очень нравятся занятия для взрослых. Была у трёх разных преподавателей — все замечательные. Радостно видеть, как много взрослых обращаются к искусству." },
  { name: "Аделина", source: "Zoon", text: "Невероятное место. Здесь всегда комфортно, можно полностью сконцентрироваться на работе и на время забыть обо всех проблемах и заботах." },
];

const prices = [
  { count: "4 занятия", term: "5 недель", price: "от 8 800 ₽" },
  { count: "8 занятий", term: "2,5 месяца", price: "от 16 800 ₽", hit: true },
  { count: "16 занятий", term: "5 месяцев", price: "от 28 900 ₽" },
  { count: "24 занятия", term: "7 месяцев", price: "от 44 000 ₽" },
];

const faq = [
  ["Мне 30, 40 или 50 лет — точно не поздно начать?", "Точно не поздно. Мы работаем со взрослыми любого возраста и подбираем задания под ваш темп, опыт и интересы. Начать можно в любое время года."],
  ["Нужен ли талант, чтобы научиться рисовать?", "Нет. Рисование — это система понятных навыков: видеть пропорции, тон, цвет и пространство. Мы последовательно объясняем каждый из них и закрепляем на практике."],
  ["У меня совсем нет опыта. С этого можно начать?", "Да. Большинство учеников приходят с нуля. Для старта рекомендуем базовый курс: он даёт опору в построении, тоне, цвете и композиции."],
  ["Смогу ли я заниматься в своём темпе с плотным графиком?", "Да. Есть вечерние группы и занятия в выходные. Можно выбирать удобные дни, а из абонемента списываются только посещённые занятия."],
  ["Это для поступления или можно рисовать просто для себя?", "Эта страница — для тех, кто хочет рисовать для себя. Подготовка к поступлению идёт по отдельной программе с портфолио и экзаменационными задачами."],
  ["Какие материалы нужны?", "На пробное занятие ничего покупать не нужно. После выбора направления преподаватель даст короткий список материалов и поможет подобрать их без лишних расходов."],
  ["Что будет, если пропустить занятие?", "Предупредите администратора заранее. Пока действует абонемент, пропущенное занятие не списывается. При необходимости срок можно продлить заморозкой."],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero adult-hero" id="top">
        <div className="hero-photo"><Image src="/assets/adult-2.jpg" alt="Занятие взрослой группы в школе рисования Баня" fill priority sizes="(max-width: 800px) 100vw, 52vw" /></div>
        <div className="hero-copy">
          <p className="eyebrow">творческая мастерская «баня» · 14+</p>
          <h1>Школа рисования, где учат <span>понимать, а не срисовывать</span></h1>
          <p className="hero-age">для взрослых и подростков в Москве</p>
          <p className="hero-lead">Объясняем правила рисования понятными словами, без занудства, чтобы вы смогли нарисовать всё, что захотите.</p>
          <a className="primary-button" href="#trial">Записаться на бесплатное пробное</a>
        </div>
        <span className="scribble-note">можно с нуля :)</span>
      </section>

      <section className="hero-facts" aria-label="О школе">
        {["2 филиала в Москве", "для подростков от 14 лет и взрослых", "единый абонемент на все направления", "программа и расписание под ваши интересы"].map((x, i) => <p key={x}><b>0{i + 1}</b>{x}</p>)}
      </section>

      <section className="about section" id="about">
        <div className="section-heading"><p className="eyebrow">рисование как пространство для себя</p><h2>Почему взрослые начинают рисовать именно у нас?</h2></div>
        <div className="about-grid">
          <div className="about-collage">
            <Image className="collage-main" src="/assets/adult-3.jpg" alt="Ученица рисует в мастерской" width={700} height={700} />
            <Image className="collage-small" src="/assets/adult-1.jpg" alt="Работа ученицы на мольберте" width={360} height={440} />
            <span>без оценок<br/>и сравнений</span>
          </div>
          <ol className="benefit-list">{benefits.map((item, i) => <li key={item}><b>{String(i + 1).padStart(2, "0")}</b><p>{item}</p></li>)}</ol>
        </div>
        <p className="manifesto">Учим наблюдать, замечать, вдохновляться и придумывать. <strong>Начать рисовать может каждый — в любом возрасте.</strong></p>
      </section>

      <section className="courses section blue-section" id="directions">
        <div className="section-heading light"><p className="eyebrow">выбирайте или сочетайте</p><h2>Направления</h2></div>
        <div className="course-list">{courses.map((course, i) => (
          <article className="course" key={course.title}>
            <div className="course-image"><Image src={course.image} alt={course.title} fill sizes="(max-width: 800px) 100vw, 44vw" /><span>0{i + 1}</span></div>
            <div className="course-copy"><p className="course-meta">{course.meta}</p><h3>{course.title}</h3><p>{course.text}</p><a href="#trial">попробовать бесплатно →</a></div>
          </article>
        ))}</div>
      </section>

      <section className="trial-band" id="trial"><div><p className="eyebrow">первый шаг — бесплатно</p><h2>Попробуйте любое направление</h2><p>Оставьте телефон — администратор свяжется с вами и подберёт удобную группу.</p></div><SignupForm /></section>

      <section className="reviews section" id="reviews">
        <div className="section-heading"><p className="eyebrow">говорят взрослые ученики</p><h2>Отзывы</h2></div>
        <div className="review-grid">{reviews.map((review, i) => <figure key={review.name} className={`review review-${i + 1}`}><div className="stars">★★★★★</div><blockquote>«{review.text}»</blockquote><figcaption><b>{review.name}</b><span>{review.source}</span></figcaption></figure>)}</div>
        <a className="text-link" href="https://yandex.com/maps/org/art_school_banya/188407802583/reviews/" target="_blank" rel="noreferrer">читать отзывы на Яндекс Картах →</a>
      </section>

      <section className="steps section pink-section" id="steps">
        <div className="section-heading"><p className="eyebrow">знакомимся без стресса</p><h2>Как проходит бесплатное занятие</h2></div>
        <ol className="step-grid">{steps.map((step, i) => <li key={step}><span>{i + 1}</span><p>{step}</p></li>)}</ol>
        <div className="inline-form"><SignupForm compact /></div>
      </section>

      <section className="prices section" id="prices">
        <div className="section-heading"><p className="eyebrow">единый абонемент</p><h2>Цены</h2></div>
        <div className="price-benefits">{["все направления", "только посещённые занятия", "свободный график", "налоговый вычет", "скидка 10% после пробного"].map(x => <span key={x}>✓ {x}</span>)}</div>
        <div className="price-grid">{prices.map(card => <article className={card.hit ? "price-card hit" : "price-card"} key={card.count}>{card.hit && <em>выбирают чаще</em>}<h3>{card.count}</h3><p>{card.term}</p><b>{card.price}</b><a href="#price-form">выбрать</a></article>)}</div>
        <p className="price-note">Точная стоимость зависит от направления. Актуальные цены сверены с сайтом мастерской; администратор уточнит вариант для вашей программы.</p>
        <div className="price-form" id="price-form"><div><p className="eyebrow">остались вопросы?</p><h3>Подберём абонемент после пробного</h3></div><SignupForm compact /></div>
      </section>

      <section className="faq section blue-section" id="faq">
        <div className="section-heading light"><p className="eyebrow">спросить не страшно</p><h2>Частые вопросы</h2></div>
        <div className="faq-list">{faq.map(([q, a]) => <details key={q}><summary><span>{q}</span><b>+</b></summary><p>{a}</p></details>)}</div>
      </section>

      <footer id="contacts">
        <div className="footer-top"><div><Image src="/assets/logo.png" alt="Баня" width={150} height={110} /><h2>Давайте рисовать</h2><a href="tel:+79953012903">+7 (995) 301-29-03</a><a href="mailto:pismo.v.banu@gmail.com">pismo.v.banu@gmail.com</a></div>
          <div className="address-list"><article><span>на севере · 4 минуты от метро</span><h3>Свиблово</h3><p>ул. Снежная, 17к2</p></article><article><span>на юге · 7 минут от метро</span><h3>Чертаново</h3><p>мкр Северное Чертаново, 1к1</p></article></div></div>
        <div className="maps"><iframe title="Филиал в Свиблово" src="https://yandex.ru/map-widget/v1/?text=Москва%2C%20Снежная%20улица%2C%2017%D0%BA2&z=16" loading="lazy"/><iframe title="Филиал в Чертаново" src="https://yandex.ru/map-widget/v1/?text=Москва%2C%20Северное%20Чертаново%2C%201%D0%BA1&z=16" loading="lazy"/></div>
        <div className="footer-bottom"><span>© творческая мастерская «Баня», 2019–2026</span><a href="https://v-bane.com/privacy" target="_blank" rel="noreferrer">политика конфиденциальности</a></div>
      </footer>
    </main>
  );
}
