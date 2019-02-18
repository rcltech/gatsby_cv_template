// this is a json object that contains all sorts of information you want to be displayed.
// enter relevant information, the comments next to input fields can help you

// important note: store all needed image files into the static/ directory

module.exports = {
  myName: 'Human', // [your name]
  description: 'I am Human', // a simple description about yourself
  email: 'mailto:huamn@gmail.com', // mailto:[your email]
  linkedIn: '', // your linkedIn profile url
  github: '', // your github profile url
  contents: {
    subsections: [
      // this is a subsection
      {
        tag: 'EDUCATION',
        content: [
          {
            head: 'University of Awesomeness', // your university
            description: 'Bachelor of Awesomeness', // your major
            subhead: 'January 0000 - End of Time',
            image: 'uni_of_awesomeness.png', // name of your image file
            action: 'none'
          }
        ]
      },

      // this is another subsection
      {
        tag: 'WORKING EXPERIENCE',
        content: [
          {
            head: 'Company of Memes',
            subhead: 'Manager of Memes',
            description: 'I work for this company, it\'s all memes.', // the \' is a backslash to escape ', as you may have noticed, all content are wrapped around a pair of '', so if you use ' for the purpose of english, this is going to start breaking code. That's why we use a \ to make sure that the following ' doesn't tell javascript to end the content there
            image: 'company_of_memes.jpg',
            action: 'none' // relevant url, if you do not want any urls, write 'none'
          },
          // more stuff under WORKING EXPERIENCE subsection - uncomment as needed
          // {
          //   head: '',
          //   subhead: '',
          //   description: '',
          //   image: '',
          //   action: ''
          // }
        ]
      },

      // more subsections - uncomment as needed
      // {
      //   tag: 'PROJECTS AND OTHER EXPERIENCE',
      //   content: [
      //     {
      //       head: '',
      //       subhead: '',
      //       description: '',
      //       image: '',
      //       action: ''
      //     },
      //   ]
      // },
      // {
      //   tag: 'LEADERSHIP ROLES',
      //   content: [
      //     {
      //       head: '',
      //       subhead: '',
      //       description: '',
      //       image: '',
      //       action: ''
      //     }
      //   ]
      // },
      // {
      //   tag: 'ACHIEVEMENTS AND AWARDS',
      //   content: [
      //     {
      //       head: '',
      //       subhead: '',
      //       description: '',
      //       image: '',
      //       action: ''
      //     }
      //   ]
      // }
    ]
  }
}
