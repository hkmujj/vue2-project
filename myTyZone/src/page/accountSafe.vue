<template >
<div>
    <page-header :title="title" class="header-blue"></page-header>
    <list :items="accountSafeList1"></list>
    <list :items="accountSafeList2"></list>
 </div>
</template>
<script>
import pageHeader from '@/components/header'
import list from '@/components/list'
export default {
  data () {
    return {
      title: '账号安全',
      accountSafeList1: [
        {
          iconClass: '',
          title: '手机号码',
          tips: '189****6785',
          linkRouter: ''
        },
        {
          iconClass: '',
          title: '密码强度',
          tips: '中',
          linkRouter: ''
        },
        {
          iconClass: '',
          title: '实名认证',
          tips: '未认证',
          linkRouter: ''
        },
        {
          iconClass: '',
          title: '密保邮箱',
          tips: '未设置',
          linkRouter: ''
        },
        {
          iconClass: '',
          title: '设备锁',
          tips: '未设置',
          linkRouter: ''
        }
      ],
      accountSafeList2: [
        {
          iconClass: '',
          title: '数据迁移',
          tips: '189****6785',
          linkRouter: ''
        }
      ]
    }
  },
  components: {
    pageHeader: pageHeader,
    list: list
  }
}
</script>
