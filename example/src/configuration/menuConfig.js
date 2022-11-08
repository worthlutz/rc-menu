const menuoptions = {
  title: "MapClick Administration",
  groups: [
    {
      items: [
        {
          type: "MenuItem",
          text: "Login",
          options: {
            tag: "Login",
          }
        },
        {
          type: "MenuItem",
          text: "Test1",
          options: {
            tag: "Test1",
          }
        },
        {
          type: "MenuLinkItem",
          text: "Home",
          href: "http://www.johnstonnc.com/gis2/"
        }
      ]
    },
    {
      text: "group 1",
      isCloseable: true,
      initiallyClosed: true,
      items: [
        {
          type: "MenuItem",
          text: "Login 1",
          options: {
            tag: "login",
          }
        },
        {
          type: "MenuLinkItem",
          text: 'Contact',
          href: "http://www.johnstonnc.com/gis2/content.cfm?PD=contact"
        }
      ]
    },
    {
      text: "group 2",
      isCloseable: true,
      initiallyClosed: false,
      items: [
        {
          type: "MenuItem",
          text: "Item 2",
          options: {
            tag: "item-2",
          }
        },
        {
          type: "SubMenu",
          text: "help submenu",
          items: [
            {
              type: "MenuItem",
              text: "Help 1",
              options: {
                tag: "Help1",
              }
            },
            {
              type: "MenuItem",
              text: "Help 2",
              options: {
                tag: "Help2",
              }
            },
            {
              type: "MenuItem",
              text: "Help 3",
              options: {
                tag: "Help3",
              }
            },
            {
              type: "MenuItem",
              text: "Help 4",
              options: {
                tag: "Help4",
              }
            }
          ]
        },
        {
          type: "MenuItem",
          text: "Item 3",
          options: {
            tag: "item3",
          }
        },
      ]
    },
    {
      text: "group 3",
      initiallyClosed: true,
      items: [
        {
          type: "MenuItem",
          text: "Help 1",
          options: {
            tag: "Help1",
          }
        },
        {
          type: "MenuItem",
          text: "Help 2",
          options: {
            tag: "Help2",
          }
        },
        {
          type: "MenuItem",
          text: "Help 3",
          options: {
            tag: "Help3",
          }
        },
        {
          type: "MenuItem",
          text: "Help 4",
          options: {
            tag: "Help4",
          }
        }
      ]
    },
    {
      isCloseable: true,
      initiallyClosed: true,
      items: [
        {
          type: "MenuItem",
          text: "Login 2",
          options: {
            tag: "login2",
          }
        },
        {
          type: "MenuItem",
          text: "Login 3",
          options: {
            tag: "login3",
          }
        },
        {
          type: "MenuItem",
          text: "Login 4",
          options: {
            tag: "login4",
          }
        },
      ]
    },
    {
      initiallyClosed: true,
      items: [
        {
          type: "MenuItem",
          text: "Logout",
          options: {
            tag: "Logout",
          }
        }
      ]
    }
  ]
}

export default menuoptions;
