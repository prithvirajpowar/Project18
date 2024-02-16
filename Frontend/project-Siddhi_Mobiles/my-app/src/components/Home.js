import React from "react";
import "../Home.css";
export default function Home() {
  return (
    <div class="container-xl-fluid justify-content-center">
      <div className="row mt-2 mb-2border border-primary">
        <img
          src="https://www.apple.com/in/iphone-15-pro/images/overview/welcome/hero_endframe__ov6ewwmbhiqq_large.jpg"
          alt="img1"
        />
      </div>

      <div className="row text-center mt-5">
        <h2 className="text-start heading1">Trending Categories</h2>
        <div class="col-xl-3">
          <img
            src="https://techring.in/wp-content/uploads/2023/02/Samsung-Galaxy-S24-Ultra.jpg"
            className="i1"
            alt="img3"
          />
          <h5>Mobiles</h5>
        </div>

        <div class="col-xl-3">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2020/10/XD/SN/JS/51517768/samsung-tab-s7-27-81-cm-11-inch-6-gb-128-gb-wifi-mystic-black--500x500.jpg"
            className="i2"
            alt="img4"
          />
          <h5>Tablets</h5>
        </div>

        <div class="col-xl-3">
          <img
            src="https://computerchoice.pk/wp-content/uploads/2020/11/Apple-MacBook-Air-MGN63-.jpg"
            className="i3"
            alt="img5"
          />
          <h5>Laptops</h5>
        </div>

        <div class="col-xl-3">
          <img
            src="https://m.media-amazon.com/images/I/61TGtBnj8xL._AC_UF350,350_QL80_.jpg"
            className="i4"
            alt="img6"
          />
          <h5>Headphones</h5>
        </div>
      </div>

      <div className="row text-center mt-5">
        <h2 className="text-start heading1">Latest Product</h2>
        <div className="col-xl-3">
          <div className="card" c1>
            <img
              src="https://ssmobile.com/in/assets/img/products/606d890b4569ec7cb07884706f9f5168.jpg"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">iphone 15 Pro</h5>
              <p className="card-text">
                256 GB Natural Titanium
                <br />
                ₹1,37,900
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="card" c1>
            <img
              src="https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzkqins-thumb-539573274?$240_240_PNG$"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Samsung S24 Ultra</h5>
              <p className="card-text">
                256 GB Titanium Black
                <br />
                ₹1,39,999
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <div className="card" c1>
            <img
              src="https://ssmobile.com/in/assets/img/products/53b27ed35ba565b1baf51baab092b882.jpg"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Oneplus 11</h5>
              <p className="card-text">
                8GB/128GB, Eternal Green
                <br />
                ₹56,999
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-3">
          <div className="card" c1>
            <img
              src="https://sathya.in/media/92660/catalog/magestic_red.jpg"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Vivo V29 5G</h5>
              <p className="card-text">
                12GB/256GB, Majestic Red
                <br />
                ₹36,990
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <img
          src="https://images.samsung.com/is/image/samsung/assets/my/smartphones/galaxy-z-fold4/images/Samsung-CareP-KV-Carousel_PC_disclaimer_O_fold.jpg"
          className="img7 mt-3 mb-3"
          alt="i5"
        />
      </div>

      <div className="row text-center mt-5">
        <h2 className="text-start heading1">Popular Product</h2>
        <div className="row">
          <div className="col-xl-3">
            <div class="card" c2>
              <img src="https://ssmobile.com/in/assets/img/products/070242969833ff76b1dbc0ab313d0256.jpg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">iphone 15</h5>
                <p className="card-text">
                  128 GB_Blue
                  <br/>
                  ₹89,990
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3">
            <div class="card" c2>
              <img src="https://ssmobile.com/in/assets/img/products/45a261a5fe1782a6fb1cf9adc3c68397.jpg" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Samsung Galaxy Z Flip5</h5>
                <p className="card-text">
                8GB/256GB, Lavender
                  <br/>
                  ₹99,999
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3">
            <div class="card" c2>
              <img src="https://www.apple.com/v/apple-watch-series-9/b/images/overview/chip/close-up_endframe__9woalcec7wiy_large.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
              <h5 className="card-title">Apple Watch series 9</h5>
                <p className="card-text">
                 from ₹49,999
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3">
            <div class="card" c2>
              <img src="https://image01-in.oneplus.net/india-oneplus-statics-file/epb/202306/09/CFhE2z7NtvXxagfS.png?x-amz-process=image/format,webp/quality,Q_80" class="card-img-top" alt="..." />
              <div class="card-body">
              <h5 className="card-title">Oneplus Buds 3</h5>
                <p className="card-text">
                 ₹6,499
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-xl-3">
            <div class="card" c2>
              <img src="https://m.media-amazon.com/images/I/517eNEDPOIL._AC_SY1000_.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
              <h5 className="card-title">echo pop Bluetooth Speaker</h5>
                <p className="card-text">
                 ₹3999
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div class="card" c2>
              <img src="https://www.notebookcheck.net/fileadmin/_processed_/f/c/csm_3d7028dee7e83602a45447a1425757d9_34a5cd65f6.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
              <h5 className="card-title">Xiaomi soundbar</h5>
                <p className="card-text">
                 ₹5999
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div class="card" c3>
              <img src="https://images.samsung.com/is/image/samsung/p6pim/hk_en/2307/gallery/hk-en-galaxy-watch6-r935-470864-sm-r935fzkatgy-thumb-537450899?$480_480_PNG$" class="card-img-top c3-i1" alt="..." />
              <div class="card-body">
              <h5 className="card-title">Samsung  watch6 LTE</h5>
                <p className="card-text">
                 ₹32,999
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div class="card" c2>
              <img src="https://ssmobile.com/in/assets/img/products/e21dd845b937b09dad6d5315846e7e35.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
              <h5 className="card-title">Redmi 12 (5G)</h5>
                <p className="card-text">
                8GB/256GB, Pastel Blue
                  <br/>
                  ₹15,799
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}