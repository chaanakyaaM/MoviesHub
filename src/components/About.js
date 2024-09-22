import React from "react";

function About() {
  return (
    <div className="about">
      <h1>ABOUT</h1>
      <p>
        MoviesHub is a user-friendly website that allows users to
        easily search for films from the IMDb database. Users can view detailed
        information about each movie, including plots,collections, cast, and
        ratings.Along with finding the information about the movie, users can
        also create and manage their own watchlists, making it simple to keep
        track of films they want to see.
      </p>
      <br />
      <p>MoviesHub has simple funcitonalities such as <span className="tech-used">fetching data from APIs</span>, navigating website(about, FAQ's) using <span className="tech-used">react-router</span> and displaying the results in the <span className="tech-used">grid </span>format.</p>
      <br />
      <p>
        Tech Stack Used: <span className="tech-used">React JS, omdb API</span>
      </p>
      <br />
      <p className="code">
        You can view the source code :{" "}
        <a href="https://github.com/chaanakyaaM/MoviesHub">here</a>{" "}
      </p>
      <br />
      {/* <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt labore
        culpa, consequatur nemo cupiditate accusantium nihil vero libero
        architecto enim quibusdam explicabo quam, omnis quos nam! Nulla ad
        sapiente hic quasi magni praesentium beatae magnam nobis quae cum
        debitis cumque labore, culpa eius recusandae consectetur mollitia? Nihil
        similique expedita dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A praesentium
        autem, dolorem natus necessitatibus in earum eius deleniti soluta nobis
        cumque aperiam commodi fugiat laudantium doloribus debitis at. At
        voluptatibus architecto omnis laboriosam quam quos deleniti quo
        doloremque, obcaecati quia!
      </p> */}
    </div>
  );
}

export default About;
