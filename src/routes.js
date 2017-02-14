import VueRouter from 'vue-router';
import index from './pages/index/index.vue';
import jobs from './pages/jobs/jobs';
import basis from './pages/basis/basis';
import phase from './pages/phase/phase';
import teacher from './pages/teacher/teacher';
import characteristic from './pages/characteristic/characteristic';
import lunbo from './pages/lunbo/lunbo';
import Laboratory from './pages/Laboratory/Laboratory';
import logic from './pages/logics/logic';
import build from './pages/build/build';
import paper from './pages/paper/paper';
import website from './pages/website/website';
import train from './pages/train/train';
import classicCase from './pages/classicCase/classicCase';
import ClassicProject from './pages/ClassicProject/ClassicProject';
import integratedCase from './pages/integratedCase/integratedCase';
import course from './pages/course/courseOutline';
import trains from './pages/trains/trains';
import resindex from './pages/resindex/resindex';
import kpc from './pages/kpc/kpc';

var routes = [{
    path: '/',
    component: index
  },
  {
    path:'/classicCase',
    component:classicCase
  },
  {
    path:'/ClassicProject',
    component:ClassicProject
  },
  {
    path:'/course',
    component:course
  },
  {
    path:'/integratedCase',
    component:integratedCase
  },
  {
    path: '/jobs',
    component: jobs
  },
  {
    path: '/basis',
    component: basis
  },
  {
    path: '/phase',
    component: phase
  },
  {
    path: '/teacher',
    component:teacher
  },
  {
    path: '/characteristic',
    component:characteristic
  },
  {
    path: '/Laboratory',
    component:Laboratory
  },
  {
    path: '/lunbo',
    component:lunbo
  },
  {
    path: '/logic',
    component:logic
  },
  {
    path: '/build',
    component:build
  },
  {
    path: '/paper',
    component:paper
  },
  {
    path: '/website',
    component:website
  },
  {
    path: '/train',
    component:train
  },
  {
    path: '/trains',
    name:"trains",
    component:trains
  },
  {
    path: '/resindex',
    component:resindex
  },
  {
    path: '/kpc',
    component:kpc
  }
];
export {routes}
