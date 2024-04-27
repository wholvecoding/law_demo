import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import PerDes from "@/views/PerDes.vue";
import HandRem from "@/views/PerDes/HandRem.vue";
import AboutView from "@/views/AboutView.vue";
import CaseSum from "@/views/PerDes/CaseSum.vue";
import WorkNotes from "@/views/PerDes/WorkNotes.vue";
import DepartmentManage from "@/views/PerDes/DepartmentManage.vue";
import CommonProcess from "@/views/PerDes/CommonProcess.vue";
import ThingToRead from "@/views/PerDes/ThingToRead.vue";
import ToDoList from "@/views/PerDes/ToDoList.vue";
import CaseManagement from "@/views/CaseManagement.vue";
import DocumentProduction from "@/views/CaseManage/DocumentProduction.vue";
import ElectronicFile from "@/views/CaseManage/ElectronicFile.vue";
import EvidenceManagement from "@/views/CaseManage/EvidenceManagement.vue";
import SubjectInfo from "@/views/CaseManage/SubjectInfo.vue";
import Clue from "@/views/Clue.vue";
import Conference from "@/views/Conference.vue";
import CrimePre from "@/views/CrimePre.vue";
import Evidence from "@/views/Evidence.vue";
import Execution from "@/views/Execution.vue";
import InfoRel from "@/views/InfoRel.vue";
import InsRegula from "@/views/InsRegula.vue";
import LawRegula from "@/views/LawRegula.vue";
import Vehicle from "@/views/Vehicle.vue";
import Person from "@/views/Person.vue";
import Clueregis from "@/views/ClueManage/Clueregis.vue";
import ClueClass from "@/views/ClueManage/ClueClass.vue";
import ClueVerify from "@/views/ClueManage/ClueVerify.vue";
import ClueProcess from "@/views/ClueManage/ClueProcess.vue";
import ClueQuery from "@/views/ClueManage/ClueQuery.vue";
import ClueStatis from "@/views/ClueManage/ClueStatis.vue";
import ConferInquery from "@/views/ConferenceManage/ConferInquery.vue";
import ConferRec from "@/views/ConferenceManage/ConferRec.vue";
import ConferToOpen from "@/views/ConferenceManage/ConferToOpen.vue";
import ConferApplic from "@/views/ConferenceManage/ConferApplic.vue";
import CrimeCase from "@/views/CrimePrevention/CrimeCase.vue";
import CrimeValut from "@/views/CrimePrevention/CrimeValut.vue";
import CrimeEduc from "@/views/CrimePrevention/CrimeEduc.vue";
import Integrity from "@/views/CrimePrevention/Integrity.vue";
import DocuSign from "@/views/DocumentManage/DocuSign.vue";
import DocuPost from "@/views/DocumentManage/DocuPost.vue";
import Docureceipt from "@/views/DocumentManage/Docureceipt.vue";
import Documents from "@/views/Documents.vue";
import EviPhysical from "@/views/EvidenceManage/EviPhysical.vue";
import ExcuFilter from "@/views/ExecutionManage/ExcuFilter.vue";
import ExcuExport from "@/views/ExecutionManage/ExcuExport.vue";
import ExcuFreeze from "@/views/ExecutionManage/ExcuFreeze.vue";
import Excuattach from "@/views/ExecutionManage/Excuattach.vue";
import ExcuSeizure from "@/views/ExecutionManage/ExcuSeizure.vue";
import ExcuProtest from "@/views/ExecutionManage/ExcuProtest.vue";
import ExcuProsecution from "@/views/ExecutionManage/ExcuProsecution.vue";
import InfoNews from "@/views/InfoRelease/InfoNews.vue";
import InfoAnnounce from "@/views/InfoRelease/InfoAnnounce.vue";
import InfoNotify from "@/views/InfoRelease/InfoNotify.vue";
import InsInquire from "@/views/InspectionSupervision/InsInquire.vue";
import InsTransfer from "@/views/InspectionSupervision/InsTransfer.vue";
import InsUpload from "@/views/InspectionSupervision/InsUpload.vue";
import InsRelease from "@/views/InspectionSupervision/InsRelease.vue";
import InsSupervision from "@/views/InspectionSupervision/InsSupervision.vue";
import InsAffair from "@/views/InspectionSupervision/InsAffair.vue";
import LawOther from "@/views/LawsRegulations/LawOther.vue";
import LawPolicy from "@/views/LawsRegulations/LawPolicy.vue";
import LawNormal from "@/views/LawsRegulations/LawNormal.vue";
import LawReg from "@/views/LawsRegulations/LawReg.vue";
import LawInterpretation from "@/views/LawsRegulations/LawInterpretation.vue";
import Law from "@/views/LawsRegulations/Law.vue";
import PerAdjust from "@/views/PerManage/PerAdjust.vue";
import PerStaff from "@/views/PerManage/PerStaff.vue";
import PerPersonnel from "@/views/PerManage/PerPersonnel.vue";
import PerInfo from "@/views/PerManage/PerInfo.vue";
import PerSub from "@/views/PerManage/PerSub.vue";
import PerOrgan from "@/views/PerManage/PerOrgan.vue";
import VehStatistic from "@/views/VehicleManage/VehStatistic.vue";
import VehFee from "@/views/VehicleManage/VehFee.vue";
import VehAppli from "@/views/VehicleManage/VehAppli.vue";
import VehRecord from "@/views/VehicleManage/VehRecord.vue";
import VehInfo from "@/views/VehicleManage/VehInfo.vue";
import TwoWay from "@/views/TwoWay.vue";
import Forward from "@/views/TwoWayConnec/Forward.vue";
import Reverse from "@/views/TwoWayConnec/Reverse.vue";
import Login from "@/views/Login.vue";
import LoginProsecution from "@/views/LoginCom/LoginProsecution.vue";

Vue.use(VueRouter)


const routes = [
    {
      path:'/',
      name:'home',
      component: HomeView,

      children:[
        // {
        //   path:'pd',
        //   name:'个人桌面',
        //   component: PerDes,
        //   children:[
        //     {
        //       path:'hr',
        //       name:'HandRem',
        //       component: HandRem
        //     },
        //     {
        //       path:'tdl',
        //       name:'ToDoList',
        //       component: ToDoList
        //     },
        //     {
        //       path:'ttr',
        //       name:'thingToread',
        //       component: ThingToRead
        //     },
        //     {
        //       path:'cp',
        //       name:'CommonProcess',
        //       component: CommonProcess
        //     },
        //     {
        //       path:'dm',
        //       name:'DepartmentManage',
        //       component: DepartmentManage
        //     },
        //     {
        //       path:'wn',
        //       name:'WorkNotes',
        //       component: WorkNotes
        //     },
        //     {
        //       path:'cs',
        //       name:'CaseSum',
        //       component: CaseSum
        //     }
        //
        //   ]
        // },
        {
          path:'cm',
          name:'CaseManagement',
          component:CaseManagement,
          children:[
            {
              path:'dp',
              name:'DocumentProduction',
              component:DocumentProduction
            },
            {
              path:'ef',
              name:'ElectronicFile',
              component:ElectronicFile
            },
            {
              path:'em',
              name:'EvidenceManagement',
              component:EvidenceManagement
            },
            {
              path:'si',
              name:'SubjectInfo',
              component:SubjectInfo
            }
          ]
        },
        {
          path:'clue',
          name:'线索管理',
          component:Clue,
          children:[
            {
              path:'regis',
              name:'线索注册',
              component: Clueregis
            },
            {
              path:'class',
              name:'线索分类',
              component: ClueClass
            },
            {
              path:'verify',
              name:'线索核实',
              component: ClueVerify
            },
            {
              path:'process',
              name:'线索处理',
              component: ClueProcess
            },
            {
              path:'query',
              name:'线索查询',
              component: ClueQuery
            },
            {
              path:'statistic',
              name:'线索统计',
              component: ClueStatis
            }
          ]
        },
        {
          path:'confer',
          name:'会议管理',
          component:Conference,
          children: [
            {
              path:'application',
              name:'会议申请',
              component:ConferApplic
            },
            {
              path:'toOpen',
              name:'待办会议',
              component:ConferToOpen
            },
            {
              path:'record',
              name:'会议记录',
              component:ConferRec
            },
            {
              path:'inquery',
              name:'会议查询',
              component:ConferInquery
            }


          ]
        },
        // {
        //   path:'crimeP',
        //   name:'犯罪预防',
        //   component:CrimePre,
        //   children: [
        //     {
        //       path:'case',
        //       name:'案例库 ',
        //       component:CrimeCase
        //     },
        //     {
        //       path:'vault',
        //       name:'风险库 ',
        //       component:CrimeValut
        //     },
        //     {
        //       path:'educ',
        //       name:'警示教育 ',
        //       component:CrimeEduc
        //     },
        //     {
        //       path:'integrity',
        //       name:'廉洁从俭 ',
        //       component:Integrity
        //     }
        //   ]
        // },
        // {
        //   path:'doc',
        //   name:'公文管理',
        //   component:Documents,
        //   children: [
        //     {
        //       path:'receipt',
        //       name:'我的收文 ',
        //       component:Docureceipt
        //     },
        //     {
        //       path:'post',
        //       name:'我的发文 ',
        //       component:DocuPost
        //     },
        //     {
        //       path:'sign',
        //       name:'发文查询 ',
        //       component:DocuSign
        //     }
        //
        //   ]
        // },
        {
          path:'evi',
          name:'证据管理',
          component:Evidence,
          children: [
            {
              path:'physical',
              name:' 物证管理',
              component: EviPhysical
            }
          ]
        },
        {
          path:'exec',
          name:'执行管理',
          component:Execution,
          children: [
            {
              path:'prosecution',
              name:' 公诉申请',
              component:ExcuProsecution
            },
            {
              path:'protest',
              name:'抗诉申请 ',
              component:ExcuProtest
            },
            {
              path:'seizure',
              name:'查封申请 ',
              component:ExcuSeizure
            },
            {
              path:'attach',
              name:' 扣押申请',
              component:Excuattach
            },
            {
              path:'freeze',
              name:' 冻结申请',
              component:ExcuFreeze
            },
            {
              path:'export',
              name:'批量导出 ',
              component:ExcuExport
            },
            {
              path:'filter',
              name:'条件筛选 ',
              component:ExcuFilter
            }
          ]
        },
        {
          path:'ir',
          name:'信息发布',
          component:InfoRel,
          children: [
            {
              path:'notify',
              name:'通知',
              component:InfoNotify
            },
            {
              path:'announce',
              name:'公告',
              component:InfoAnnounce
            },
            {
              path:'news',
              name:'新闻',
              component:InfoNews
            }
          ]
        },
        {
          path:'inr',
          name:'纪检监督',
          component:InsRegula,
          children: [
            {
              path:'affair',
              name:'检务公开',
              component:InsAffair
            },
            {
              path:'inssup',
              name:'政治监督',
              component:InsSupervision
            },
            {
              path:'release',
              name:'发布',
              component:InsRelease
            },
            {
              path:'upload',
              name:'上传',
              component:InsUpload
            },
            {
              path:'transfer',
              name:'转移',
              component:InsTransfer
            },
            {
              path:'inquire',
              name:'查询',
              component:InsInquire
            }

          ]

        },
        {
          path:'lr',
          name:'法律法规',
          component:LawRegula,
          children: [
            {
              path:'law',
              name:'法律',
              component:Law
            },
            {
              path:'inter',
              name:'司法解释',
              component:LawInterpretation
            },
            {
              path:'reg',
              name:'行政规章',
              component:LawReg
            },
            {
              path:'normal',
              name:'规范性文件',
              component:LawNormal
            },
            {
              path:'policy',
              name:'政策性文件',
              component:LawPolicy
            },
            {
              path:'other',
              name:'其他文件',
              component:LawOther
            }
          ]
        },
        {
          path:'person',
          name:'人事管理',
          component:Person,
          children: [
            {
              path:'organ',
              name:'组织机构',
              component:PerOrgan
            },
            {
              path:'sub',
              name:'我的下属',
              component:PerSub
            },
            {
              path:'info',
              name:'我的信息',
              component:PerInfo
            },
            {
              path:'personnel',
              name:'人事信息',
              component:PerPersonnel
            },
            {
              path:'staff',
              name:'在职员工',
              component:PerStaff
            },
            {
              path:'adjust',
              name:'人事调整',
              component:PerAdjust
            }
          ]
        },
        {
          path:'veh',
          name:'车辆管理',
          component:Vehicle,
          children: [
            {
              path:'info',
              name:'车辆信息',
              component:VehInfo
            },
            {
              path:'rec',
              name:'使用记录',
              component:VehRecord
            },
            {
              path:'appli',
              name:'用车申请',
              component:VehAppli
            },
            {
              path:'fee',
              name:'车辆费用',
              component:VehFee
            },
            {
              path:'stat',
              name:'报表统计',
              component:VehStatistic
            }
          ]
        },
        {
          path:'2w',
          name:'行刑双向衔接',
          component:TwoWay ,
          children:[
            {
              path:'fo',
              name:'正向衔接',
              component:Forward
            },
            {
              path:'re',
              name:'反向衔接',
              component: Reverse
            }
          ]

        }
      ]
    },

  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/login',
    name:'登录界面',
    component: Login,
    children: [
      {
        path:'pro',
        name:'云检智行模块登录',
        component: LoginProsecution
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
