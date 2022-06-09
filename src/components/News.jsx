import React from 'react'
import Header from './Header'

function News() {
    return (
        <><Header />
            <div class="overflow-hidden">
                <h1 class="headline">СТРАНИЦА НОВОСТЕЙ</h1>

                <div class="container position-relative">
                    <article class="z-index-1 position-relative">


                        <div class="article-meta d-flex justify-content-between mb-6">
                            <div id="author" class="center-v">
                                <svg id="author-avatar" class="me-3" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
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
                                <p class="byline fw-700 mb-0">by Penny Pen</p>
                            </div>

                            <p class="dateline mb-0 fw-700">June 21, 2021</p>
                        </div>

                        <main>
                            <section class="mb-7">
                                <div class="row">
                                    <div class="col-md-8">
                                        <p class="lead mb-6 pb-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem est minima quam! Laborum odit quidem earum perferendis eius laudantium perspiciatis similique deleniti delectus suscipit, cum corrupti facere reprehenderit esse.
                                        </p>
                                    </div>
                                </div>

                                <div class="row row-cols-1 row-cols-md-3 text-body-light">
                                    <div class="col">
                                        <p>Animi aut, atque quibusdam similique distinctio enim iure, blanditiis rerum autem illum eum in. Dolorem quasi aspernatur nemo deserunt quo, libero dolore atque magni, ullam nihil corrupti et illo earum?</p>

                                        <p>Quos, ad? Et, iure. Officia fuga unde quibusdam nemo modi perspiciatis quisquam consectetur voluptates, dolore ab eaque voluptatem corporis placeat consequatur itaque qui asperiores. Consequuntur quas vitae animi est ea!</p>

                                        <p>Accusantium nemo labore corrupti laudantium! Quo reprehenderit ea perspiciatis temporibus! Illo sapiente harum fuga molestias temporibus iste animi. Velit, tenetur mollitia sit magni nulla quos veniam molestias consectetur aliquam eaque.</p>

                                        <aside class="border-start border-3 p-4 fw-700" data-tor="scroll:@background-color(rgb(...0,18,42); rgb(...50,14,85), {target: body})">
                                            <p>Quos, ad? Et, iure. Libero dolore atque magni.</p>
                                        </aside>

                                        <p>Voluptatem, omnis, placeat recusandae iste explicabo accusantium velit laboriosam voluptatum similique, fugit culpa enim! Suscipit labore odit porro assumenda, molestiae aperiam laboriosam explicabo nemo soluta facere sed libero magnam. Odio.</p>
                                    </div>

                                    <div class="col">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem est minima quam! Laborum odit quidem earum perferendis eius laudantium perspiciatis similique deleniti delectus suscipit, cum corrupti facere reprehenderit esse. Sed officia ipsum, soluta quibusdam enim quisquam ea atque nulla sunt temporibus, dolorum veniam dolor aspernatur quod. Praesentium vitae exercitationem quod, inventore eius quidem ea sit, nemo reprehenderit voluptatum officia.</p>

                                        <p>Animi aut, atque quibusdam similique distinctio enim iure, blanditiis rerum autem illum eum in. Dolorem quasi aspernatur nemo deserunt quo, libero dolore atque magni, ullam nihil corrupti et illo earum?
                                            Voluptatem, omnis, placeat recusandae iste explicabo accusantium velit laboriosam voluptatum similique, fugit culpa enim! Suscipit labore odit porro assumenda, molestiae aperiam laboriosam explicabo nemo soluta facere sed libero magnam</p>
                                    </div>

                                    <div class="col">
                                        <figure><img class="img-fluid" src="https://assets.codepen.io/t-1/freddy-g-lhy1lY3CyLI-unsplash.jpg" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
                                            <figcaption class="small text-muted mt-2">Photo by Freddy G</figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </section>

                            <section class="mb-7" data-tor-group="
            [class*='col'] => inview:[fade.in pull.up(md)] slower quad delay(/+50ms/);
            img => scroll:@T=translate(-99.99%; 0%, {end: 50});
          ">
                                <h2 class="mb-6">High Scores & High Drama</h2>

                                <div class="row">
                                    <div class="col-md-8">
                                        <p class="lead mb-6 pb-3">Voluptatem, omnis, placeat recusandae iste explicabo accusantium velit laboriosam voluptatum similique, fugit culpa enim! Suscipit labore odit porro assumenda, molestiae aperiam laboriosam explicabo nemo soluta facere sed libero magnam. Odio.</p>
                                    </div>
                                </div>

                                <div class="row text-body-light">
                                    <div class="col-md-8">
                                        <figure class="overflow-hidden"><img class="img-fluid" src="https://assets.codepen.io/t-1/cassidy-james-blaede-1lzJt360gkE-unsplash.jpg" alt="two people playing Guitar Hero Arcade. " />
                                            <figcaption class="small text-muted mt-2">Photo by Cassidy James Blaede</figcaption>
                                        </figure>
                                    </div>

                                    <div class="col-md-4">
                                        <p>Voluptatem, omnis, placeat recusandae iste explicabo accusantium velit laboriosam voluptatum similique, fugit culpa enim! Suscipit labore odit porro assumenda, molestiae aperiam laboriosam explicabo nemo soluta facere sed libero magnam. Odio.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id amet ad blanditiis vero delectus incidunt tempore reiciendis eius qui vel placeat reprehenderit, ut, dolore asperiores possimus impedit. Ipsum, culpa eaque!</p>
                                        <p>Velit vero esse quisquam accusantium? Dolore alias, quaerat quod excepturi officiis ipsa placeat officia necessitatibus illo, vero quasi esse aut. Doloremque nesciunt placeat animi saepe tempore aspernatur, officia vitae laudantium!</p>
                                    </div>
                                </div>

                            </section>

                            <section class="mb-7" data-tor-group="
            [class*='col'] => inview:[fade.in pull.up(md)] slower quad delay(/+50ms/);
            img => scroll:@T=scale(80%;100%);
          ">
                                <h2 class="mb-6">Leveling Up</h2>

                                <div class="row">
                                    <div class="col-md-8">
                                        <p class="lead mb-6 pb-3">Animi aut, atque quibusdam similique distinctio enim iure, blanditiis rerum autem illum eum in. Dolorem quasi aspernatur nemo deserunt quo, libero dolore atque magni, ullam nihil corrupti et illo earum?</p>

                                        <div class="row text-body-light">
                                            <div class="col-md-6">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem est minima quam! Laborum odit quidem earum perferendis eius laudantium perspiciatis similique deleniti delectus suscipit, cum corrupti facere reprehenderit esse.</p>
                                                <p>Voluptatem, omnis, placeat recusandae iste explicabo accusantium velit laboriosam voluptatum similique, fugit culpa enim! Suscipit labore odit porro assumenda, molestiae aperiam laboriosam explicabo nemo soluta facere sed libero magnam. Odio.</p>
                                                <p>Animi aut, atque quibusdam similique distinctio enim iure, blanditiis rerum autem illum eum in. Dolorem quasi aspernatur nemo deserunt quo, libero dolore atque magni, ullam nihil corrupti et illo earum?</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Voluptatem, omnis, placeat recusandae iste explicabo accusantium velit laboriosam voluptatum similique, fugit culpa enim! Suscipit labore odit porro assumenda, molestiae aperiam laboriosam explicabo nemo soluta facere sed libero magnam. Odio.</p>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id amet ad blanditiis vero delectus incidunt tempore reiciendis eius qui vel placeat reprehenderit, ut, dolore asperiores possimus impedit. Ipsum, culpa eaque!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <figure><img class="img-fluid" src="https://assets.codepen.io/t-1/nick-jones-QTk3Llc-oKU-unsplash.jpg" alt="a person wearing a bucket hat, sitting on a skee ball machine lane. " />
                                            <figcaption class="small text-muted mt-2">Photo by Nick Jones</figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </section>

                            <section class="mb-7">
                                <div class="row g-0">
                                    <div class="col">
                                        <figure class="overflow-hidden"><img data-tor="scroll:@T=translateX(50%;0%)" class="img-fluid" src="https://assets.codepen.io/t-1/ersin-mandaliev-C5DC5bJhpRE-unsplash.jpg" alt="a person in black high-heeled boots sitting on an arcade basketball game. " />
                                            <figcaption class="small text-muted mt-2">Photo by Ersin Mandaliev</figcaption>
                                        </figure>
                                    </div>
                                    <div class="col">
                                        <figure class="overflow-hidden"><img data-tor="scroll:@T=translateX(-50%;0%)" class="img-fluid" src="https://assets.codepen.io/t-1/nick-jones-g7jhzbd9WFQ-unsplash.jpg" alt="a person in a white t-shirt sitting on a wheel of fortune arcade game. " />
                                            <figcaption class="small text-muted mt-2">Photo by Nick Jones</figcaption>
                                        </figure>
                                    </div>

                                </div>
                            </section>

                            <section data-tor-group="
            [class*='col'] => inview:[fade.in pull.up(md)] slower quad delay(/+50ms/);
          ">
                                <h2 class="mb-6">Game Over?</h2>

                                <div class="row">
                                    <div class="col-md-8">
                                        <p class="lead mb-6 pb-3">Animi aut, atque quibusdam similique distinctio enim iure, blanditiis rerum autem illum eum in. Dolorem quasi aspernatur nemo deserunt quo, libero dolore atque magni, ullam nihil corrupti et illo earum?</p>
                                    </div>
                                </div>

                                <div class="row mb-7">
                                    <div class="col-md-4">
                                        <p>Velit vero esse quisquam accusantium? Dolore alias, quaerat quod excepturi officiis ipsa placeat officia necessitatibus illo, vero quasi esse aut. Doloremque nesciunt placeat animi saepe tempore aspernatur, officia vitae laudantium!</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem est minima quam! Laborum odit quidem earum perferendis eius laudantium perspiciatis similique deleniti delectus suscipit, cum corrupti facere reprehenderit esse.</p>
                                        <p>Aperiam est ab harum alias quae rem, cumque vero. Dolore possimus quas eius dolor voluptatibus cumque velit, ratione aspernatur voluptatem? Nulla voluptatem quaerat placeat error, ipsam alias dignissimos odit excepturi?</p>
                                    </div>

                                    <div class="col-md-4">
                                        <p>Consectetur sed, itaque modi fugit asperiores similique maxime voluptatum incidunt labore vero cumque provident, deleniti nam? Molestiae impedit nostrum soluta quo iure, iste, nobis expedita minus ad officia dolor saepe.</p>
                                        <aside class="border-start border-3 p-4 fw-700">
                                            <p>Labore vero cumque provident, deleniti nam, cumque vero.</p>
                                        </aside>
                                        <p>Consectetur sed, itaque modi fugit asperiores similique maxime voluptatum incidunt labore vero cumque provident, deleniti nam? Molestiae impedit nostrum soluta quo iure, iste, nobis expedita minus ad officia dolor saepe.</p>
                                    </div>

                                    <div class="col-md-4">
                                        <p>Aperiam est ab harum alias quae rem, cumque vero. Dolore possimus quas eius dolor voluptatibus cumque velit, ratione aspernatur voluptatem? Nulla voluptatem quaerat placeat error, ipsam alias dignissimos odit excepturi?</p>
                                        <p>Velit vero esse quisquam accusantium? Dolore alias, quaerat quod excepturi officiis ipsa placeat officia necessitatibus illo, vero quasi esse aut. Doloremque nesciunt placeat animi saepe tempore aspernatur, officia vitae laudantium!</p>
                                    </div>
                                </div>

                                <div class="h-50rem">
                                    <figure><img class="w-100" src="https://assets.codepen.io/t-1/element5-digital-dwcC-OJ-bRs-unsplash.jpg" alt="three neon-lit skee ball lanes. " data-tor="scroll:@T=scale(2;1, {end: 60}) origin.top" />
                                        <figcaption>Photo by Element5 Digital</figcaption>
                                    </figure>
                                </div>

                            </section>
                        </main>

                    </article>

                    <div class="bg">
                        <div class="container h-100">
                            <div class="row row-cols-3 h-100">
                                <div class="col">
                                    <div class="border-start border-white border-opacity-20 border-end h-100"></div>
                                </div>
                                <div class="col">
                                    <div class="border-start border-white border-opacity-20 border-end h-100"></div>
                                </div>
                                <div class="col">
                                    <div class="border-start border-white border-opacity-20 border-end h-100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News