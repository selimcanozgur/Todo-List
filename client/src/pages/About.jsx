const About = () => {
  return (
    <div className="flex flex-col lg:flex lg:flex-row justify-center gap-24 items-center mt-12 w-full pb-12">
      <img className="xl:w-[450px] w-[300px]" src="/img/todo-photo.png" />
      <div className="w-[500px]">
        <div className="w-full px-24 md:px-0">
          <h1 className="xl:text-3xl text-2xl mb-6 uppercase font-poppins text-orange-400">
            About Us
          </h1>
          <p className="font-montserrat tracking-wide text-zinc-500 font-medium text-sm md:text-base">
            Hello! My name is Selimcan, a 26-year-old front-end developer. I
            enjoy enhancing user experiences and designing functional, modern
            web applications. This project is a Todo List Application that I
            created to help improve productivity and organize daily tasks more
            efficiently. With its user-friendly interface and flexible design,
            this app provides a simple way for users to manage their to-do lists
            effortlessly.
          </p>
          <br />
          <p className="font-montserrat tracking-wider text-zinc-500 font-medium text-sm md:text-base">
            This application is part of my journey to enhance my technical
            skills while offering real-world solutions. Feel free to reach out
            for more information about this and other projects!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
