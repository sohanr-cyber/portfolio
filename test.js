const teches = [
  {
    id: "cl5xdcryd15g10bo6zfoz1bkq",
    name: "NextJs",
  },
  {
    id: "cl5xddiit15h20bo6jfzbuioh",
    name: "Front End",
  },
  {
    id: "cl5xdh2il15kr0bo6kto4efd7",
    name: "ReactJs",
  },
  {
    id: "cl5xdig7y15me0bo6a8zjalex",
    name: "Redux",
  },
  {
    id: "cl5xdizbd0t3e0bpc7rhks8wi",
    name: "Back End",
  },
  {
    id: "cl5xek1w1167p0bo66fg36z1x",
    name: "All",
  },
];

const projects = {
  data: {
    projectsConnection: {
      edges: [
        {
          node: {
            tech: [
              {
                id: "cl5xdcryd15g10bo6zfoz1bkq",
                name: "NextJs",
              },
              {
                id: "cl5xddiit15h20bo6jfzbuioh",
                name: "Front End",
              },
              {
                id: "cl5xdh2il15kr0bo6kto4efd7",
                name: "ReactJs",
              },
              {
                id: "cl5xdig7y15me0bo6a8zjalex",
                name: "Redux",
              },
              {
                id: "cl5xek1w1167p0bo66fg36z1x",
                name: "All",
              },
            ],
            id: "cl5rkhxjd0bos0cpolu3bikzw",
            photos: [
              {
                url: "https://media.graphassets.com/VWYFFxylR3uboVk38oAV",
              },
            ],
          },
        },
        {
          node: {
            tech: [
              {
                id: "cl5xddiit15h20bo6jfzbuioh",
                name: "Front End",
              },
              {
                id: "cl5xdh2il15kr0bo6kto4efd7",
                name: "ReactJs",
              },
              {
                id: "cl5xek1w1167p0bo66fg36z1x",
                name: "All",
              },
            ],
            id: "cl5rlz21o0dab0cpouoedju5c",
            photos: [
              {
                url: "https://media.graphassets.com/7oKk7yFLRt2mJbTnqEoS",
              },
            ],
          },
        },
        {
          node: {
            tech: [
              {
                id: "cl5xdcryd15g10bo6zfoz1bkq",
                name: "NextJs",
              },
              {
                id: "cl5xddiit15h20bo6jfzbuioh",
                name: "Front End",
              },
              {
                id: "cl5xdh2il15kr0bo6kto4efd7",
                name: "ReactJs",
              },
              {
                id: "cl5xek1w1167p0bo66fg36z1x",
                name: "All",
              },
            ],
            id: "cl5umtlca2hi10bplct93ws6m",
            photos: [
              {
                url: "https://media.graphassets.com/9fo8ULwxQGxTvNjX2f6N",
              },
            ],
          },
        },
        {
          node: {
            tech: [
              {
                id: "cl5xdcryd15g10bo6zfoz1bkq",
                name: "NextJs",
              },
              {
                id: "cl5xddiit15h20bo6jfzbuioh",
                name: "Front End",
              },
              {
                id: "cl5xdh2il15kr0bo6kto4efd7",
                name: "ReactJs",
              },
              {
                id: "cl5xek1w1167p0bo66fg36z1x",
                name: "All",
              },
            ],
            id: "cl5wj0k7d0qsi0bo6jwtbxihc",
            photos: [
              {
                url: "https://media.graphassets.com/tUWbs7L1RNGzgWLmLw3g",
              },
            ],
          },
        },
        {
          node: {
            tech: [
              {
                id: "cl5xdizbd0t3e0bpc7rhks8wi",
                name: "Back End",
              },
              {
                id: "cl5xek1w1167p0bo66fg36z1x",
                name: "All",
              },
            ],
            id: "cl5wji9lh0r360bo6ro26v6kg",
            photos: [
              {
                url: "https://media.graphassets.com/gkSMEQexR66NtwfEqovI",
              },
            ],
          },
        },
        {
          node: {
            tech: [
              {
                id: "cl5xdcryd15g10bo6zfoz1bkq",
                name: "NextJs",
              },
              {
                id: "cl5xdh2il15kr0bo6kto4efd7",
                name: "ReactJs",
              },
              {
                id: "cl5xek1w1167p0bo66fg36z1x",
                name: "All",
              },
            ],
            id: "cl5wnz1ea0gyb0bpcyalltjbu",
            photos: [
              {
                url: "https://media.graphassets.com/pMMRPsjcQ2aycpK4JE0I",
              },
            ],
          },
        },
        {
          node: {
            tech: [
              {
                id: "cl5xdcryd15g10bo6zfoz1bkq",
                name: "NextJs",
              },
              {
                id: "cl5xdh2il15kr0bo6kto4efd7",
                name: "ReactJs",
              },
              {
                id: "cl5xdig7y15me0bo6a8zjalex",
                name: "Redux",
              },
              {
                id: "cl5xek1w1167p0bo66fg36z1x",
                name: "All",
              },
            ],
            id: "cl5x8pq5f0qks0bpc8bjgjkd3",
            photos: [
              {
                url: "https://media.graphassets.com/2QsEqMkSAqtnSh1xtErw",
              },
            ],
          },
        },
      ],
    },
  },
};

const projectdata = projects.data.projectsConnection.edges;
projectdata.map((item) => {
  //   console.table(item.node.tech);
});
//   console.table(projectdata)

let projectslist = [];

projectdata.forEach((item) => {
  projectslist.push({ ...item.node, tech: item.node.tech.map((i) => i.name) });
});

console.table(projectslist);
// console.log(projectslist);

const filtered = projectslist.filter((item) =>
  item.tech.includes(teches[0].name)
);
console.log(filtered);
