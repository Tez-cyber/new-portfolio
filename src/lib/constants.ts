export const projectDesc = [
  [`IT and Branding Agency`],
  [`TurfTriibe is a platform that connects sports enthusiasts`],
  [`Matthias Pliessing is a renowned artist and designer`],
  [`QuickPayex is a cutting-edge giftcard payment processing solution`],
  [`Inks & Pixels - Printing agency`],
  [`HRLead - Managerial Optimization for companies`],
  [`Amfaj - Exceptional AgriculturalCommodities`],
];

export const projectTitles = [
  {
    title: "Nsexpress",
    link: "https://ns-express.netlify.app/",
  },
  {
    title: "Turftriibe",
    link: "https://www.turftriibe.com/",
  },
  {
    title: "Matthias Pliessing",
    link: "https://matthias-pliessnig.vercel.app/",
  },
  {
    title: "QuickPayex",
    link: "https://www.quickpayex.com/",
  },
  {
    title: "Inks & Pixels",
    link: "https://inks-pixels.vercel.app/",
  },
  {
    title: "HrLead",
    link: "https://hrlead.vercel.app/",
  },
  {
    title: "Amfaj",
    link: "https://amfaj.vercel.app/",
  },
];

const email = "salamitopezeez@gmail.com";
const subject = "Interest in Collaboration - [Your Project]";
const body = `Hello, I'm [Your Name],

        I saw your portfolio and wanted to discuss a potential project.

        Here's what I need:
        - [Brief description]
        - Timeline: [When needed]
        - Budget: [Range]

        Let me know if you're available for a chat!

        Best,
        [Your Name]
        [Your Email]
        `;

export const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
  subject
)}&body=${encodeURIComponent(body)}`;
