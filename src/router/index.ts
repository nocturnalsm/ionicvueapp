import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import useFirebaseAuth from "../hooks/firebase-auth";
const state = useFirebaseAuth();

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/opening',
    name: 'opening',
    component: () => import('../views/Opening.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Auth/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Auth/Register.vue')
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import('../views/Auth/ForgotPassword.vue')
  },
  {
    path: '/verification',
    name: 'verification',
    component: () => import('../views/Auth/EmailVerification.vue')
  },
  {
    path: '/resetpassword',
    name: 'resetpassword',
    component: () => import('../views/Auth/ResetPassword.vue')
  },
  {
    path: '/resetsuccess',
    name: 'resetsuccess',
    component: () => import('../views/Auth/ResetSuccess.vue')
  },
  {
    path: '/tabs/',
    component: Tabs,
    name: 'tabs-list',
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: '/tabs/home',
        component: () => import('@/views/Home.vue'),
        name: 'home'
      },
      {
        path: '/tabs/trending',
        component: () => import('@/views/Trending.vue')
      },
      {
        path: '/tabs/profile/',
        name: 'profile',
        component: () => import('@/views/Profile.vue')
      },
      {
        path: '/tabs/messages/',
        name: 'messages',
        component: () => import('@/views/Messages/MessageList.vue')
      }
    ]
  },
  {
      path: '/messageshow',
      name: 'messageshow',
      component: () => import('@/views/Messages/MessageShow.vue')
  },
  {
      path: '/notifications',
      name: 'notifications',
      component: () => import('@/views/Common/Notifications.vue')
  },
  {
      path: '/notification-invitation',
      name: 'notification-invitation',
      component: () => import('@/views/Common/NotificationsInvitation.vue')
  },
  {
      path: '/notification-request',
      name: 'notification-request',
      component: () => import('@/views/Common/NotificationsRequest.vue')
  },
  {
      path: '/notification-battle',
      name: 'notification-battle',
      component: () => import('@/views/Common/NotificationsBattle.vue')
  },
  {
      path: '/evidence',
      name: 'evidence',
      component: () => import('@/views/Common/Evidence.vue')
  },
  {
      path: '/about-us',
      name: 'about-us',
      component: () => import('@/views/Common/AboutUs.vue')
  },
  {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('@/views/Common/ContactUs.vue')
  },
  {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/Common/Settings.vue')
  },
  {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/views/Common/Pricing.vue')
  },
  {
      path: '/report-problem',
      name: 'report-problem',
      component: () => import('@/views/Common/ReportProblem.vue')
  },
  {
      path: '/friends',
      name: 'friends',
      component: () => import('@/views/Common/Friends.vue')
  },
  {
      path: '/records',
      name: 'records',
      component: () => import('@/views/Common/Records.vue')
  },
  {
      path: '/help',
      name: 'help',
      component: () => import('@/views/Common/Help.vue')
  },
  {
      path: '/emoticons',
      name: 'emoticons',
      component: () => import('@/views/Common/Emoticons.vue')
  },
  {
      path: '/notification-setting',
      name: 'notification-setting',
      component: () => import('@/views/Common/NotificationSetting.vue')
  },
  {
      path: '/change-password',
      name: 'change-password',
      component: () => import('@/views/Common/ChangePassword.vue')
  },
  {
      path: '/profile-setting',
      name: 'profile-setting',
      component: () => import('@/views/Common/ProfileSetting.vue')
  },
  {
      path: '/request-debate',
      name: 'request-debate',
      component: () => import('@/views/Home/RequestDebate.vue')
  },
  {
      path: '/comments',
      name: 'comments',
      component: () => import('@/views/Home/Comments.vue')
  },
  {
      path: '/invite-to-case',
      name: 'invite-to-case',
      component: () => import('@/views/Profile/InviteToCase.vue')
  },
  {
      path: '/profile-friend',
      name: 'profile-friend',
      component: () => import('@/views/Profile/ProfileFriend.vue')
  },
  {
      path: '/profile-non-friend',
      name: 'profile-non-friend',
      component: () => import('@/views/Profile/ProfileNonFriend.vue')
  },
  {
      path: '/new-issue',
      name: 'new-issue',
      component: () => import('@/views/Post/NewIssue.vue')
  },
  {
      path: '/issue',
      name: 'issue',
      component: () => import('@/views/Debate/Issue.vue')
  },
  {
      path: '/invite-friend',
      name: 'invite-friend',
      component: () => import('@/views/Debate/InviteFriend.vue')
  },
  {
      path: '/choose-judge',
      name: 'choose-judge',
      component: () => import('@/views/Debate/ChooseJudge.vue')
  },
  {
      path: '/stream-before-vote',
      name: 'stream-before-vote',
      component: () => import('@/views/Debate/StreamBeforeVote.vue')
  },
  {
      path: '/stream-after-vote',
      name: 'stream-after-vote',
      component: () => import('@/views/Debate/StreamAfterVote.vue')
  },
  {
      path: '/stream-winner',
      name: 'stream-winner',
      component: () => import('@/views/Debate/StreamWinner.vue')
  },
  {
      path: '/debate-winner',
      name: 'debate-winner',
      component: () => import('@/views/Debate/DebateWinner.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const front = ['login','register','forgot','verification','resetpassword','resetsuccess'];
  if (state.user.value && (to.name === 'login')) {
    next({ name: "home" });
  } else {
    next();
  }
})
export default router
