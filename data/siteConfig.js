module.exports = {
  myName: 'Your name',
  description: 'simple description',
  email: '', // mailto:seanchok@connect.hku.hk
  linkedIn: '', // https://www.linkedin.com/in/sean-chok-9035b2144/
  github: '', // https://github.com/98sean98
  contents: {
    subsections: [
      // this is a subsection
      {
        tag: 'EDUCATION',
        content: [
          {
            head: 'The University of Hong Kong',
            description: 'Bachelor of Engineering',
            subhead: 'September 2018 - June 2022',
            image: 'HKULogo.png',
            action: 'none'
          }
        ]
      },

      // this is another subsection
      {
        tag: 'WORKING EXPERIENCE',
        content: [
          {
            head: '',
            subhead: '',
            description: '',
            image: '',
            action: '' // relevant url, if you do not want any urls, write 'none'
          },
          // more stuff under WORKING EXPERIENCE subsection
          {
            head: '',
            subhead: '',
            description: '',
            image: '',
            action: ''
          }
        ]
      },

      // more subsections
      {
        tag: 'PROJECTS AND OTHER EXPERIENCE',
        content: [
          {
            head: '',
            subhead: '',
            description: '',
            image: '',
            action: ''
          },
        ]
      },
      {
        tag: 'LEADERSHIP ROLES',
        content: [
          {
            head: '',
            subhead: '',
            description: '',
            image: '',
            action: ''
          }
        ]
      },
      {
        tag: 'ACHIEVEMENTS AND AWARDS',
        content: [
          {
            head: '',
            subhead: '',
            description: '',
            image: '',
            action: ''
          }
        ]
      }
    ]
  }
}
