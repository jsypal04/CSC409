const data = {
  toc: [
    {
      title: "What is a Steam Locomotive?",
      href: "#section-1"
    },
    {
      title: "The Torch Lake Steam Locomotive",
      href: "#section-2"
    },
    {
      title: "The American Locomotive Company Steam Locomotive",
      href: "#section-3"
    },
  ],
  main: [
    {
      title: {
        innerText: "What is a Steam Locomotive?",
        id: "section-1"
      },
      img: {
        src: "images/steam_diagram.png",
        id: "steam-diagram",
        alt: "Diagram of a Steam Engine"
      },
      content: [
        `A steam locomotive is train engine that provides the force to move itself by boiling water to produce
        steam to turn its pistons. A steam locomotive works by heating water in the main part of the engine.
        The water is heated by a fire, usually fueled by coal, which is stoked by the train’s operator. When
        the water is turned into steam, it goes to the top of the engine and is redirected to the pistons.
        The engine uses a valve to apply steam pressure in both directions of the piston, allowing it to go
        back and forth, turning the wheels.`,
        `The steam locomotive was very influential in its day. Below are two historic coal powered steam locomotives.`
      ]
    },
    {
      title: {
        innerText: "The Torch Lake Steam Locomotive",
        id: "section-2",
      },
      img: {
        src: "images/torch_lake.jpg",
        id: "torch-lake-img",
        alt: "Torch Lake Steam Locomotive"
      },
      content: [
        `The Torch Lake steam locomotive was built by Mason Machine Works in 1873. It hauled ore for the Calumet and
        Hecla Mining Company on Michigan's Keweenaw Peninsula. The engine is an articulated design. The driving wheels
        pivot under the boiler, allowing the locomotive to handle sharp curves.`,
        `This locomotive is currently the oldest steam locomotive that is still used on a regular basis. It is located
        at the Greenfield Village Museum in Dearborn Michigan.`
      ]
    },
    {
      title: {
        innerText: "The American Locomotive Company Steam Locomotive",
        id: "section-3"
      },
      img: {
        src: "images/american_locomotive_co.jpg",
        id: "american-locomotive-img",
        alt: "American Locomotive Co. Steam Locomotive"
      },
      content: [
        `
        The American Locomotive Company of Schenectady, New York, built this locomotive in 1902. It is a 4-4-2 Atlantic
        type, with four leading wheels, four driving wheels, and two trailing wheels. The Atlantic was designed to pull
        light wooden passenger cars at high speeds. This locomotive operated on the Michigan Central Railroad's
        Detroit-Chicago line until heavier steel cars made it obsolete. It is currently located at the Greenfield Village
        Museum in Dearborn Michigan, however, it is not in use since it’s wheels are too wide for the tracks.`
      ]
    },
  ]
};


const render = (data) => {
  let main = document.getElementById("root");
  let toc = document.getElementById("TOC");

  if (!data.toc) {
    throw Error("Bad data");
  }

  data.toc.forEach((section) => {
    let toc_li = document.createElement("li");
    let toc_a = document.createElement("a");
    toc_a.href = section.href;
    toc_a.innerText = section.title;
    toc_li.appendChild(toc_a);
    toc.appendChild(toc_li);
  });

  if (!data.main) {
    throw Error("No main content section");
  }

  data.main.forEach((sectionData) => {
    let section = document.createElement("section");
    let title = document.createElement("h2");
    let image = document.createElement("img");

    Object.entries(sectionData.title)
      .forEach((prop) => title[prop[0]] = prop[1]);
    section.appendChild(title);

    Object.entries(sectionData.img)
      .forEach((prop) => image[prop[0]] = prop[1]);
    section.appendChild(image)

    sectionData
      .content
      .map((paragraph) => {
        let pElement = document.createElement("p");
        pElement.innerText = paragraph;
        return pElement;
      })
      .forEach((pElement) => section.appendChild(pElement));
    main.appendChild(section);
  });
}

render(data);
