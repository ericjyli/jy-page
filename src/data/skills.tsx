interface Skill {
  name: string;
  competency: number;
  category: string[];
}


const skills: Skill[] = [
  {
    name: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    name: 'React',
    competency: 3,
    category: ['Web Development'],
  },
  {
      name: 'Vue',
      competency: 2,
      category: ['Web Development'],
  },
  {
    name: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    name: 'ElasticSearch',
    competency: 1,
    category: ['Web Development', 'Databases'],
  },
  {
    name: 'MySql',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    name: 'Redis',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    name: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    name: 'FastAPI',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    name: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    name: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    name: 'AWS',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    name: 'Docker',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    name: 'Numpy',
    competency: 3,
    category: ['Data Engineering', 'Python'],
  },
  {
    name: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    name: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    name: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    name: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    name: 'C',
    competency: 4,
    category: ['Languages'],
  },
  {
    name: 'MATLAB',
    competency: 3,
    category: ['Languages'],
  },
  {
    name: 'Pandas',
    competency: 1,
    category: ['Data Engineering',  'Python'],
  },
  {
      name: 'Verilog',
      competency: 4,
      category: ['Languages', 'Hardware Design']
  },
  {
      name: 'Intel Quartus',
      competency: 2,
      category: ['Hardware Design', 'Tools']
  },
  {
      name: 'Modelsim',
      competency: 3,
      category: ['Hardware Design', 'Tools']
  },
  {
      name: 'Dart',
      competency: 1,
      category: ['Languages']
  },
  {
      name: 'Assembly',
      competency: 3,
      category: ['Languages']
  },
  {
      name: 'Prompt Engineering',
      competency: 4,
      category: ['Python', 'Tools']
  }
  


].map((skill) => ({ ...skill, category: skill.category.sort() }));
  
  // this is a list of colors that I like. The length should be === to the
  // number of categories. Re-arrange this list until you find a pattern you like.
  const colors = [
    '#6968b3',
    '#37b1f5',
    '#40494e',
    '#515dd4',
    '#e47272',
    '#cc7b94',
    '#3896e2',
    '#c3423f',
    '#d75858',
    '#747fff',
    '#64cb7b',
  ];
  
  // const categories = [
  //   ...new Set(skills.flatMap(({ category }) => category)),
  // ].sort().map((category, index) => ({
  //   name: category,
  //   color: colors[index],
  // }));
  
  // export { categories, skills };


interface Category {
  name: string;
  color: string;
}

const categorySet = new Set<string>();
skills.forEach(({ category }) => category.forEach((cat) => categorySet.add(cat)));

const categories: Category[] = Array.from(categorySet).sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };