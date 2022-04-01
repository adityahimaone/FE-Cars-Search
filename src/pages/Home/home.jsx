import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MenuIcon,
  XIcon,
  UsersIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import HeroImg from "../../assets/images/hero.png";
import EmailIcon from "../../assets/images/icon_email.svg";
import FBIcon from "../../assets/images/icon_fb.svg";
import TwitterIcon from "../../assets/images/icon_twitter.svg";
import InstagramIcon from "../../assets/images/icon_ig.svg";
import TwitchIcon from "../../assets/images/icon_twitch.svg";

import { Select, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

function Home() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <div>
      <nav className="py-3 px-10 bg-bluewhite">
        <div className="container mx-auto">
          <div className="flex items-center ">
            <div className="grow">
              <div className="w-[100px] h-[34px] bg-primaryDarkBlue-400"></div>
            </div>
            <div
              className={
                offcanvas
                  ? "absolute inset-0 bg-black/80 transition-all z-20"
                  : ""
              }
            ></div>
            <div
              className={`w-[250px] lg:w-full bg-gradient-to-b from-white to-bluewhite lg:bg-none fixed lg:static lg:h-auto lg:p-0 top-0 z-50 h-full p-10 transition-all ${
                offcanvas ? "right-0" : "-right-full "
              }`}
            >
              <div className="flex shrink lg:hidden mb-4">
                <h2 className=" font-bold">BCR</h2>
                <button
                  type="button"
                  onClick={() => setOffcanvas(!offcanvas)}
                  className="absolute top-10 right-10 lg:hidden text-black"
                >
                  <XIcon className="w-6 h-6" />
                </button>
              </div>
              <ul className="flex lg:space-x-8 lg:justify-end lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
                <li>
                  <Link to="/#">Our Service</Link>
                </li>
                <li>
                  <Link to="/#">Why Us</Link>
                </li>
                <li>
                  <Link to="/#">Testimonial</Link>
                </li>
                <li>
                  <Link to="/#">FAQ</Link>
                </li>
                <li>
                  <Link
                    to="/#"
                    className=" bg-primaryLimeGreen-400 text-white px-2 py-2 rounded-sm"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:hidden flex items-center">
              <button type="button" onClick={() => setOffcanvas(!offcanvas)}>
                <MenuIcon className="w-5 h-5 text-black " />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative">
        <div className="bg-bluewhite relative">
          <div className="container mx-auto px-10 py-8 relative">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1 space-y-6 z-10">
                <h1 className="text-4xl font-bold lg:w-[568px]">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className=" lg:w-[500px]">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
              </div>
              <div className="flex-1 z-10">
                <img src={HeroImg} alt="hero" />
              </div>
            </div>
            <div className="absolute w-[474px] lg:w-[410px] xl:w-[774px] h-[243px] bottom-0 right-0 rounded-tl-[60px] bg-primaryDarkBlue-400"></div>
          </div>
          <div className="absolute xl:w-[504px] w-[104px] lg:w-[374px] h-[243px] bottom-0 right-0 bg-primaryDarkBlue-400"></div>
        </div>
        <div className="w-full flex justify-center mx-auto relative lg:absolute lg:-bottom-10">
          <div className="flex w-full m-2 flex-col lg:flex-row bg-white max-w-screen-lg space-x-3 p-4 rounded-md shadow-lg z-10">
            <div className="flex-1">
              <label>Tipe Driver</label>
              <Select variant="outline" placeholder="Pilih Tipe Driver">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </Select>
            </div>
            <div className="flex-1">
              <label>Tanggal</label>
              <Input type="date" id="birthday" name="birthday" />
            </div>
            <div className="flex-1">
              <label>Waktu Jemput</label>
              <Select icon={<ClockIcon />} placeholder="Pilih Waktu">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </Select>
            </div>
            <div className="flex-1">
              <label>Jumlah Penumpang</label>
              <InputGroup variant="outline">
                <Input placeholder="Jumlah Penumpang" />
                <InputRightElement
                  children={<UsersIcon className="h-5 w-5" />}
                />
              </InputGroup>
            </div>
            <div className="flex items-end">
              <button className="bg-primaryLimeGreen-400 text-white px-2 py-2 rounded-sm">
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="flex flex-col lg:flex-row container px-10 justify-between mt-32 mb-10">
          <div className="text-center lg:text-left space-y-5">
            <p>
              Jalan Suroyo No. 161 Mayangan <br /> Kota Probolonggo 672000
            </p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="flex justify-center flex-row lg:flex-col gap-3 font-semibold">
            <a href="#our-service">Our Service</a>
            <a href="#whyus">Why Us</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h6 className="text-center lg:text-left mb-2">Connect With us</h6>
            <div className="flex justify-center gap-2">
              <a href="https://www.facebook.com/">
                <img src={FBIcon} alt="icon-fb" className="footer-sosmed" />
              </a>
              <a href="https://www.instagram.com/">
                <img
                  src={InstagramIcon}
                  alt="icon-ig"
                  className="footer-sosmed"
                />
              </a>
              <a href="https://www.twitter.com/">
                <img
                  src={TwitterIcon}
                  alt="icon-twitter"
                  className="footer-sosmed"
                />
              </a>
              <a href="https://www.email.com/">
                <img
                  src={EmailIcon}
                  alt="icon-email"
                  className="footer-sosmed"
                />
              </a>
              <a href="https://www.twitch.com/">
                <img
                  src={TwitchIcon}
                  alt="icon-twitch"
                  className="footer-sosmed"
                />
              </a>
            </div>
          </div>
          <div className="text-center justify-center">
            <h6 className="mb-2">Copyright Binar 2022</h6>
            <div className="flex justify-center w-[100px] h-[34px] bg-primaryDarkBlue-400"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
