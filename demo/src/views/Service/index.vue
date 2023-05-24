<template>
  <div>
    <Header :active="isStatus"></Header>
    <div>
      <div class="tab_banner">
        <div style="font-size: 2.25rem">业务介绍</div>
        <div style="font-size: 1rem">SERVICE</div>
      </div>
      <customertab
        :tab-items="tabItems"
        :activeTab.sync="activeTab"
      ></customertab>
    </div>
    <div class="contain-holder">
      <div class="container-box">
        <div class="container">
          <div class="card-container" v-if="getTabactive() === 0">
            <div class="card-left">
              <img
                src="@/assets/image/asset_management_illustration.png"
                alt="IMAGE"
              />
            </div>
            <div class="card-right">
              <h5>不良资产经营</h5>
              <p style="text-indent: 2em">
                不良资产经营业务是瑞京资产业务体系的核心，针对细分市场客户需求，坚持差异化，专业化，精细化的经营方式，通过定制化的经营管理模式，按照市场化的操作规则，通过购买各类金融机构和非金融机构的不良资产（包括债权，股权，动产，不动产以及其他形式的资产），采用债务重组，资产重组，债转股，诉讼追偿，资产转让，结构化交易等多种技术手段，依托自身完善的估值体系和健全的风控体系，实现不良资产增值收益及重组收益。
              </p>
            </div>
          </div>
          <div class="card-container" v-if="getTabactive() === 1">
            <div class="card-left">
              <img
                src="@/assets/image/enterprize_management_illustration.png"
                alt="IMAGE"
              />
            </div>
            <div class="card-right">
              <h5>合伙企业管理</h5>
              <p style="text-indent: 2em">
                基于业务联动的合伙企业合作模式是瑞京资产创新发展路径的有益尝试。瑞京资产联合地方政府、社会投资人搭建特殊资产合伙企业、产业升级调整合伙企业等，瑞京资产受托担任合伙企业管理人，通过资本运作和管理提升等手段，发挥各方在不良资产资源渠道、处置能力等方面的优势，专注于省内特殊资产的收购与处置、重点项目的并购与重组、问题企业的诊断与盘活，助力构建地方不良资产处置生态圈。
              </p>
            </div>
          </div>
          <div class="card-container" v-if="getTabactive() === 2">
            <div class="card-left">
              <img
                src="@/assets/image/investment_management_illustration.png"
                alt="IMAGE"
              />
            </div>
            <div class="card-right">
              <h5>投资管理</h5>
              <p style="text-indent: 2em">
                投资管理业务是瑞京资产不良资产经营业务的丰富和延伸。瑞京资产充分利用不良资产经营过程中积累的项目经验和渠道资源，延伸不良资产投资产业链，完善公司业务和收益结构，对具有良好发展前景的企业采用包括但不限于股权投资、债转股、实物资产营运管理等多种方式进行投资，以便为客户提供多元化资产管理服务。
              </p>
            </div>
          </div>
          <div class="card-container" v-if="getTabactive() === 3">
            <div class="card-left">
              <img
                src="@/assets/image/enterprize_helper_illustration.png"
                alt="IMAGE"
              />
            </div>
            <div class="card-right">
              <h5>企业纾困</h5>
              <p style="text-indent: 2em">
                瑞京资产借助自身及股东资源优势，为陷入临时流动性经营困难的上市公司、实体企业等提供融资纾困服务，重点纾困符合产业方向、有发展前景的企业，帮助企业缓解流动性困境，保障企业稳定经营并步入良性发展轨道，实现可持续发展。
              </p>
            </div>
          </div>
          <div class="card-container" v-if="getTabactive() === 4">
            <div class="card-left">
              <img
                src="@/assets/image/financial_service_illustration.png"
                alt="IMAGE"
              />
            </div>
            <div class="card-right">
              <h5>金融服务</h5>
              <p style="text-indent: 2em">
                瑞京资产依托国联综合金融优势，发挥母公司旗下证券、信托、期货、担保等金融服务平台协同效应，为客户的融资业务提供全方位、多元化的融资渠道、增信服务及金融产品，进一步延伸资产经营价值链。
              </p>
            </div>
          </div>
          <div class="card-container" v-if="getTabactive() === 5">
            <div class="card-left">
              <img
                src="@/assets/image/counselor_consult_illustration.png"
                alt="IMAGE"
              />
            </div>
            <div class="card-right">
              <h5>顾问咨询</h5>
              <p style="text-indent: 2em">
                瑞京资产凭借自身业务能力和金融经验，为客户提供量身定制的金融咨询服务，开展相对独立的单项财务顾问业务或因资产管理业务、投资业务等衍生出的综合财务顾问业务，包括并购重组顾问、破产清算咨询、融资顾问等。
              </p>
            </div>
          </div>
          <div class="card-container" v-if="getTabactive() === 6">
            <div class="card-left">
              <img
                src="@/assets/image/counselor_consult_illustration.png"
                alt="IMAGE"
              />
            </div>
            <div class="card-right">
              <h5>其他服务</h5>
              <p style="text-indent: 2em">
                根据不同客户个性化需求，瑞京资产能够为客户提供一揽子不良资产解决方案，包括：企业资产的并购、重组；对外投资；受托资产管理；企业项目策划；企业上市、风险管理服务；受托管理私募股权投资基金。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
/* global require */
import Header from '@/components/Header/index';
import Footer from '@/components/Footer/index';
import customertab from '../components/CustomerTab/index.vue';
export default {
  components: {
    Header,
    Footer,
    customertab,
  },
  data() {
    return {
      isStatus: 4,
      change: 1,
      activeTab: 0,
      tabItems: [
        {
          text: '不良资产经营',
          icon: require('@/assets/image/asset_management_icon.png'),
        },
        {
          text: '合伙企业管理',
          icon: require('@/assets/image/enterprize_management_icon.png'),
        },
        {
          text: '投资管理',
          icon: require('@/assets/image/investment_management_icon.png'),
        },
        {
          text: '企业纾困',
          icon: require('@/assets/image/enterprize_helper_icon.png'),
        },
        {
          text: '金融服务',
          icon: require('@/assets/image/counselor_consult_icon.png'),
        },
        {
          text: '顾问咨询',
          icon: require('@/assets/image/other_service_icon.png'),
        },
        {
          text: '其他服务',
          icon: require('@/assets/image/other_service_icon.png'),
        },
      ],
    };
  },
  methods: {
    getTabactive() {
      return this.activeTab;
    },
  },
  computed: {
    styleObject() {
      return {
        left: this.posIndex[this.change - 1][0] + 'px',
        width: this.posIndex[this.change - 1][1] + 'px',
      };
    },
  },
  mounted() {
    this.change = parseInt(this.$route.query.change);
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/news.scss';
.tab_banner {
  background: url('@/assets/image/service_top_bg.png') no-repeat 50%;
  background-size: cover;
}

.ant-active {
  color: #e60012;
  font-weight: 500;
}

.ink-bar {
  width: 72px;
  height: 4px;
  transform: scaleX(1.5);
  bottom: 0;
  transition: width 0.3s, left 0.3s, right 0.3s;
  background-color: #e60012;
  position: absolute;
  pointer-events: none;
}

.contain-holder {
  flex: auto;
  min-width: 0;
  min-height: 0;
}

.container-box {
  display: flex;
  width: 100%;
}

.container {
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

@media screen and (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media screen and (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.card-container {
  display: flex;
  margin: 1.6875rem 0 3.125rem;
}

.card-left {
  width: 50%;
  flex-basis: 50%;

  img {
    height: 12.75rem;
    overflow-clip-margin: content-box;
    overflow: clip;
    max-width: 100%;
    display: block;
  }
}

.card-right {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  flex-basis: 50%;

  & > h5 {
    width: 100%;
    text-align: left;
    color: #e60012;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1.375rem;
    line-height: 1.2;
  }
}
</style>
