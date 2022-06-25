import { FiEdit, FiPieChart, FiShoppingBag } from "react-icons/fi";
import { AiOutlineAreaChart, AiOutlineBarChart, AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineStock } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { BsBarChart, BsKanban } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { GiLouvrePyramid } from "react-icons/gi";
import React from "react";
import { routes } from "../../route";

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Ecommerce',
        icon: <FiShoppingBag />,
        route: routes.ecommerce
      },
    ],
  },
  {
    title: 'Pages',
    links: [
      {
        name: 'Orders',
        icon: <AiOutlineShoppingCart />,
        route: routes.orders
      },
      {
        name: 'Employees',
        icon: <IoMdContacts />,
        route: routes.employees
      },
      {
        name: 'Customers',
        icon: <RiContactsLine />,
        route: routes.customers
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'Calendar',
        icon: <AiOutlineCalendar />,
        route: routes.calendar
      },
      {
        name: 'Kanban',
        icon: <BsKanban />,
        route: routes.kanban
      },
      {
        name: 'Editor',
        icon: <FiEdit />,
        route: routes.editor
      },
      {
        name: 'Color picker',
        icon: <BiColorFill />,
        route: routes.colorPicker
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'Line',
        icon: <AiOutlineStock />,
        route: routes.chartLine
      },
      {
        name: 'Area',
        icon: <AiOutlineAreaChart />,
        route: routes.chartArea
      },
      {
        name: 'Bar',
        icon: <AiOutlineBarChart />,
        route: routes.chartBar
      },
      {
        name: 'Pie',
        icon: <FiPieChart />,
        route: routes.chartPie
      },
      {
        name: 'Financial',
        icon: <RiStockLine />,
        route: routes.chartFinancial
      },
      {
        name: 'Color mapping',
        icon: <BsBarChart />,
        route: routes.chartColorMapping
      },
      {
        name: 'Pyramid',
        icon: <GiLouvrePyramid />,
        route: routes.chartPyramid
      },
      {
        name: 'Stacked',
        icon: <AiOutlineBarChart />,
        route: routes.chartStacked
      },
    ],
  },
];
