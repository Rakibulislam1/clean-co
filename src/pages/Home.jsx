import introImage from "../assets/images/intro.jpg";
import Container from "../components/ui/Container";
const Home = () => {
  return (
    <Container>
      <section className="flex gap-5 my-32">
        <div className="flex-[1] flex flex-col justify-between">
          <h1 className="lg:text-7xl text-3xl font-bold">Quality Cleaning <br /> <span className="text-green-500">for Your Home</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            aspernatur.
          </p>

          <div>
            <button className="btn bg-green-500">Book a Service</button>
            <button className="btn btn-ghost">Read More</button>
          </div>
          <div className="divider w-3/4"></div>

          <div className="flex items-center gap-5">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>

            <p>Rated 5 out of 5 by our clients</p>
          </div>
        </div>

        <div className="flex-[1] w-[800px] h-[400px] rounded-md overflow-hidden">
          <img className="w-full h-full object-cover" src={introImage} alt="introImage" />
        </div>
      </section>
    </Container>
  );
};

export default Home;
