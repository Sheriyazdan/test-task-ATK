import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import News from './components/News';
function App() {
  return (
    <div className="App">
      <Header />
      <h1 class="headline">Главная страница</h1>

      <div class="layout-wrapper">

        <nav class="cover-wrapper">
          <div class="page-sub">
            <div class="subhead-container">
              <h2 class="subhead">The next generation of arcade gamers top the leaderboard</h2>
            </div>
            <div class="article-meta">
              <svg id="author-avatar" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
                <title id="avatarTitle">Author Avatar</title>
                <desc id="avatarDesc">A cartoon avatar of a smiling purple square on a blue background.</desc>
                <mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                  <rect width="36" height="36" rx="72" fill="white"></rect>
                </mask>
                <g mask="url(#mask__beam)">
                  <rect width="36" height="36" fill="#0ebeff"></rect>
                  <rect x="0" y="0" width="36" height="36" transform="translate(6 6) rotate(192 18 18) scale(1)" fill="#754cac" rx="6"></rect>
                  <g transform="translate(0 2) rotate(-2 18 18)">
                    <path d="M13,19 a1,0.75 0 0,0 10,0" fill="white"></path>
                    <rect x="12" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect>
                    <rect x="22" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect>
                  </g>
                </g>
              </svg>
              <p class="byline">by Penny Pen</p>
              <p class="dateline">June 21, 2021</p>
            </div>
          </div>
        </nav>
        <div class="section-1">
          <p class="article-tags">
            <span class="tag">culture</span>
            <span class="tag">games</span>
            <span class="tag featured glow">featured</span>
          </p>
          <p class="first-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem est minima quam! Laborum odit quidem earum perferendis eius laudantium perspiciatis similique deleniti delectus suscipit, cum corrupti facere reprehenderit esse.</p>
          <p>Animi aut, atque quibusdam similique distinctio enim iure, blanditiis rerum autem illum eum in. Dolorem quasi aspernatur nemo deserunt quo, libero dolore atque magni, ullam nihil corrupti et illo earum?</p>
          <p>Quos, ad? Et, iure. Officia fuga unde quibusdam nemo modi perspiciatis quisquam consectetur voluptates, dolore ab eaque voluptatem corporis placeat consequatur itaque qui asperiores. Consequuntur quas vitae animi est ea!</p>
          <p>Accusantium nemo labore corrupti laudantium! Quo reprehenderit ea perspiciatis temporibus! Illo sapiente harum fuga molestias temporibus iste animi. Velit, tenetur mollitia sit magni nulla quos veniam molestias consectetur aliquam eaque.</p>
          <p>Voluptatem, omnis, placeat recusandae iste explicabo accusantium velit laboriosam voluptatum similique, fugit culpa enim! Suscipit labore odit porro assumenda, molestiae aperiam laboriosam explicabo nemo soluta facere sed libero magnam. Odio.</p>
        </div>
        <aside class="full-width-span">
          <p>"</p>
          <p>Quos, ad? Et, iure. Libero dolore atque magni.</p>
          <p>"</p>
        </aside>
        <div>
          <div class="section-2">
            <h2>High Scores &amp; High Drama</h2>
            <figure><img src="https://assets.codepen.io/t-1/cassidy-james-blaede-1lzJt360gkE-unsplash.jpg" alt="two people playing Guitar Hero Arcade. " />
              <figcaption>Photo by Cassidy James Blaede</figcaption>
            </figure>
            <p>Voluptatem, omnis, placeat recusandae iste explicabo accusantium velit laboriosam voluptatum similique, fugit culpa enim! Suscipit labore odit porro assumenda, molestiae aperiam laboriosam explicabo nemo soluta facere sed libero magnam. Odio.</p>
            <p>Animi aut, atque quibusdam similique distinctio enim iure, blanditiis rerum autem illum eum in. Dolorem quasi aspernatur nemo deserunt quo, libero dolore atque magni, ullam nihil corrupti et illo earum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem est minima quam! Laborum odit quidem earum perferendis eius laudantium perspiciatis similique deleniti delectus suscipit, cum corrupti facere reprehenderit esse.</p>
            <p>Voluptatem, omnis, placeat recusandae iste explicabo accusantium velit laboriosam voluptatum similique, fugit culpa enim! Suscipit labore odit porro assumenda, molestiae aperiam laboriosam explicabo nemo soluta facere sed libero magnam. Odio.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id amet ad blanditiis vero delectus incidunt tempore reiciendis eius qui vel placeat reprehenderit, ut, dolore asperiores possimus impedit. Ipsum, culpa eaque!</p>
            <p>Velit vero esse quisquam accusantium? Dolore alias, quaerat quod excepturi officiis ipsa placeat officia necessitatibus illo, vero quasi esse aut. Doloremque nesciunt placeat animi saepe tempore aspernatur, officia vitae laudantium!</p>

          </div>
          <div class="section-2">
            <h2>Game Over?</h2>

            <p>Animi aut, atque quibusdam similique distinctio enim iure, blanditiis rerum autem illum eum in. Dolorem quasi aspernatur nemo deserunt quo, libero dolore atque magni, ullam nihil corrupti et illo earum?</p>

            <figure><img src="https://assets.codepen.io/t-1/element5-digital-dwcC-OJ-bRs-unsplash.jpg" alt="three neon-lit skee ball lanes. " />
              <figcaption>Photo by Element5 Digital</figcaption>
            </figure>

            <p>Velit vero esse quisquam accusantium? Dolore alias, quaerat quod excepturi officiis ipsa placeat officia necessitatibus illo, vero quasi esse aut. Doloremque nesciunt placeat animi saepe tempore aspernatur, officia vitae laudantium!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem est minima quam! Laborum odit quidem earum perferendis eius laudantium perspiciatis similique deleniti delectus suscipit, cum corrupti facere reprehenderit esse.</p>
            <p>Aperiam est ab harum alias quae rem, cumque vero. Dolore possimus quas eius dolor voluptatibus cumque velit, ratione aspernatur voluptatem? Nulla voluptatem quaerat placeat error, ipsam alias dignissimos odit excepturi?</p>
            <p>Consectetur sed, itaque modi fugit asperiores similique maxime voluptatum incidunt labore vero cumque provident, deleniti nam? Molestiae impedit nostrum soluta quo iure, iste, nobis expedita minus ad officia dolor saepe.</p>
            <aside>
              <p>"</p>
              <p>Labore vero cumque provident, deleniti nam, cumque vero.</p>
              <p>"</p>
            </aside>
            <p>Consectetur sed, itaque modi fugit asperiores similique maxime voluptatum incidunt labore vero cumque provident, deleniti nam? Molestiae impedit nostrum soluta quo iure, iste, nobis expedita minus ad officia dolor saepe.</p>
            <p>Aperiam est ab harum alias quae rem, cumque vero. Dolore possimus quas eius dolor voluptatibus cumque velit, ratione aspernatur voluptatem? Nulla voluptatem quaerat placeat error, ipsam alias dignissimos odit excepturi?</p>
          </div>
        </div>
        <div class="section-3">

          <h2>Leveling Up</h2>
          <p>Animi aut, atque quibusdam similique distinctio enim iure, blanditiis rerum autem illum eum in. Dolorem quasi aspernatur nemo deserunt quo, libero dolore atque magni, ullam nihil corrupti et illo earum?</p>

          <figure><img src="https://assets.codepen.io/t-1/nick-jones-QTk3Llc-oKU-unsplash.jpg" alt="a person wearing a bucket hat, sitting on a skee ball machine lane. " />
            <figcaption>Photo by Nick Jones</figcaption>
          </figure>


          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem est minima quam! Laborum odit quidem earum perferendis eius laudantium perspiciatis similique deleniti delectus suscipit, cum corrupti facere reprehenderit esse.</p>
          <p>Voluptatem, omnis, placeat recusandae iste explicabo accusantium velit laboriosam voluptatum similique, fugit culpa enim! Suscipit labore odit porro assumenda, molestiae aperiam laboriosam explicabo nemo soluta facere sed libero magnam. Odio.</p>
          <p>Animi aut, atque quibusdam similique distinctio enim iure, blanditiis rerum autem illum eum in. Dolorem quasi aspernatur nemo deserunt quo, libero dolore atque magni, ullam nihil corrupti et illo earum?</p>
          <p>Voluptatem, omnis, placeat recusandae iste explicabo accusantium velit laboriosam voluptatum similique, fugit culpa enim! Suscipit labore odit porro assumenda, molestiae aperiam laboriosam explicabo nemo soluta facere sed libero magnam. Odio.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id amet ad blanditiis vero delectus incidunt tempore reiciendis eius qui vel placeat reprehenderit, ut, dolore asperiores possimus impedit. Ipsum, culpa eaque!</p>

          <figure><img src="https://assets.codepen.io/t-1/ersin-mandaliev-C5DC5bJhpRE-unsplash.jpg" alt="a person in black high-heeled boots sitting on an arcade basketball game. " />
            <figcaption>Photo by Ersin Mandaliev</figcaption>
          </figure>


          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem est minima quam! Laborum odit quidem earum perferendis eius laudantium perspiciatis similique deleniti delectus suscipit, cum corrupti facere reprehenderit esse.</p>
          <p>Velit vero esse quisquam accusantium? Dolore alias, quaerat quod excepturi officiis ipsa placeat officia necessitatibus illo, vero quasi esse aut. Doloremque nesciunt placeat animi saepe tempore aspernatur, officia vitae laudantium!</p>

          <figure><img src="https://assets.codepen.io/t-1/nick-jones-g7jhzbd9WFQ-unsplash.jpg" alt="a person in a white t-shirt sitting on a wheel of fortune arcade game. " />
            <figcaption>Photo by Nick Jones</figcaption>
          </figure>


          <p>Asperiores cum quisquam voluptate adipisci nihil ipsa eum libero recusandae inventore facilis modi nulla, provident ut, ad explicabo magnam unde voluptates commodi.</p>
          <p>Consectetur sed, itaque modi fugit asperiores similique maxime voluptatum incidunt labore vero cumque provident, deleniti nam? Molestiae impedit nostrum soluta quo iure, iste, nobis expedita minus ad officia dolor saepe.</p>
          <aside>
            <p>"</p>
            <p>Labore vero cumque provident, deleniti nam, cumque vero.</p>
            <p>"</p>
          </aside>
          <p>Consectetur sed, itaque modi fugit asperiores similique maxime voluptatum incidunt labore vero cumque provident, deleniti nam? Molestiae impedit nostrum soluta quo iure, iste, nobis expedita minus ad officia dolor saepe.</p>
          <p>Aperiam est ab harum alias quae rem, cumque vero. Dolore possimus quas eius dolor voluptatibus cumque velit, ratione aspernatur voluptatem? Nulla voluptatem quaerat placeat error, ipsam alias dignissimos odit excepturi?</p>
        </div>
      </div>
      <Routes>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/news" element={<News />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
