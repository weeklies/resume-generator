const generalExample = {
  name: 'Bobby Tables',
  email: 'bobby@droptable.com',
  subtitle: 'Experienced database administrator in Bobbylon.',
  phone: '+01 1234 5678',
};
const educationExample = {
  title: 'Education',
  articles: [
    {
      course: 'MSc in Database Mayhem',
      school: 'University of Bobbylon',
      date: '2015 - 2016',
      responsibilities: [],
    },
    {
      course: 'BS in Computer Science',
      school: 'University of Bobbylon',
      date: '2010 - 2014',
      responsibilities: [],
    },
  ],
};
const workExample = {
  title: 'Experience',
  articles: [
    {
      role: 'Database Administrator',
      company: 'Company B',
      date: 'Dec 2021 - Present',
      responsibilities: [
        'Collaborate with development and infrastructure teams to design, implement and maintain databases for new projects',
        'Resolve database-related issues and provide technical support to users',
        'Document database configurations, procedures, and processes',
      ],
    },
    {
      role: 'Database Administrator',
      company: 'Company A',
      date: 'Oct 2018 - Dec 2021',
      responsibilities: [
        'Manage and maintain multiple Oracle and MySQL databases',
        'Perform routine database maintenance tasks such as backups, recovery, and data purging',
        'Monitor database performance and tune as necessary to ensure optimal performance',
        'Develop and implement database security policies and procedures to ensure data privacy and confidentiality',
      ],
    },
    {
      role: 'Database Intern',
      company: 'Company XYZ',
      date: '2016 - 2017',
      responsibilities: [
        'Assisted in the management and maintenance of MySQL databases',
        'Performed routine database maintenance tasks such as backups, recovery, and data purging',
      ],
    },
  ],
};

export { educationExample, workExample, generalExample };
