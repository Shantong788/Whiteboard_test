import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Probbxx from '@/components/newp/probbxx'
import Callnumber from '@/components/newp/callnumber'
import Shouye from '@/components/newp/shouye'
import Faceone from '@/components/newp/faceone'
import Hswork from '@/components/newp/hswork'
import Biaod from '@/components/newp/biaod'
import Form from '@/components/newp/form'
import Parent from '@/views/parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/form',
      name:"Form",
      component: Form
    },
    {
      path:'/biaod',
      name:"Biaod",
      component: Biaod
    },
    {
      path:'/parent',
      name:"Parent",
      component: Parent
    },
    {
      path: '/newp/shouye',
      name: 'Shouye',
      component: Shouye
    },
    {
      path: '/newp/faceone',
      name: 'Faceone',
      component: Faceone
    },
    {
      path: '/newp/probbxx',
      name: 'Probbxx',
      component: Probbxx
    },
    {
      path: '/newp/callnumber',
      name: 'Callnumber',
      component: Callnumber,
      children:[
        {
          path:'/',
          name:'Hswork',
          component: Hswork
        }       
      ]
    },   
    {
     path: '/',
      name: 'HelloWorld',
       component: HelloWorld
    },    
  ]
})
