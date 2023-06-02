<template>
  <div>
    <div class="asset">
      <div class="box-father">
        <div class="left-box">
          <div class="left-one">
            <h2 class="h2-title">重点推介资产</h2>
            <p class="more" @click="goToAsset(1)">MORE >></p>
          </div>
          <div class="left-two">
            <div class="left-two-first" @click="checkDetil(showAsset[0].id)">
              <h3 class="asset-name">{{ showAsset[0].name }}</h3>
              <div class="number-one">
                <span>{{ showAsset[0].fare }}</span
                >万元
              </div>
              <div class="location">
                <i class="el-icon-location-outline"></i
                >{{ showAsset[0].province }}
              </div>
            </div>
            <div class="left-two-second" @click="checkDetil(showAsset[1].id)">
              <h3 class="asset-name">{{ showAsset[1].name }}</h3>
              <div class="number-one">
                <span>{{ showAsset[1].fare }}</span
                >万元
              </div>
              <div class="location">
                <i class="el-icon-location-outline"></i
                >{{ showAsset[1].province }}
              </div>
            </div>
          </div>
          <div class="arrow">
            <span>
              <span
                class="iconfont icon-xiangzuojiantou"
                @click="backAsset"
              ></span>
            </span>
            <span>
              <span
                class="iconfont icon-xiangyoujiantou"
                @click="nextAsset"
              ></span>
            </span>
          </div>
        </div>
      </div>
      <hr />
      <!-- <div class="mid-box">
        <div class="the-line"></div>
      </div> -->
      <div class="box-father">
        <div class="left-box">
          <div class="left-one">
            <h2 class="h2-title">拟处置资产</h2>
            <p class="more" @click="goToAsset(0)">MORE >></p>
          </div>
          <div class="left-two">
            <div class="left-two-first" @click="checkDetil(showUnAsset[0].id)">
              <h3 class="asset-name">{{ showUnAsset[0].name }}</h3>
              <div class="number-one">
                <span>{{ showUnAsset[0].fare }}</span
                >万元
              </div>
              <div class="location">
                <i class="el-icon-location-outline"></i
                >{{ showUnAsset[0].province }}
              </div>
            </div>
            <div class="left-two-second" @click="checkDetil(showUnAsset[1].id)">
              <h3 class="asset-name">{{ showUnAsset[1].name }}</h3>
              <div class="number-one">
                <span>{{ showUnAsset[1].fare }}</span
                >万元
              </div>
              <div class="location">
                <i class="el-icon-location-outline"></i
                >{{ showUnAsset[1].province }}
              </div>
            </div>
          </div>
          <div class="arrow">
            <span>
              <span
                class="iconfont icon-xiangzuojiantou"
                @click="backUnAsset"
              ></span>
            </span>
            <span>
              <span
                class="iconfont icon-xiangyoujiantou"
                @click="nextUnAsset"
              ></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAssetList } from '@/api/Home/asset';
export default {
  data() {
    return {
      importantAsset: [
        { id: '', name: '', fare: '', province: '' },
        { id: '', name: '', fare: '', province: '' },
      ],
      unimportantAsset: [
        { id: '', name: '', fare: '', province: '' },
        { id: '', name: '', fare: '', province: '' },
      ],
      showIndex: 1,
      unShowIndex: 1,
    };
  },
  created() {
    getAssetList().then((res) => {
      this.importantAsset = res.data.data[0];
      this.unimportantAsset = res.data.data[1];
    });
  },
  computed: {
    showAsset() {
      return this.importantAsset
        .map((item) => {
          return {
            id: item.id,
            name: item.assetName,
            fare: `${item.creditRightFare / 1000}`,
            province: item.provinceString,
            collection: item.collection,
            click: item.click,
          };
        })
        .filter((item, index) => {
          return index <= this.showIndex && index >= this.showIndex - 1;
        });
    },
    showUnAsset() {
      return this.unimportantAsset
        .map((item) => {
          return {
            id: item.id,
            name: item.assetName,
            fare: `${item.creditRightFare / 1000}`,
            province: item.provinceString,
            collection: item.collection,
            click: item.click,
          };
        })
        .filter((item, index) => {
          return index <= this.unShowIndex && index >= this.unShowIndex - 1;
        });
    },
  },
  methods: {
    checkDetil(id) {
      this.$router.push(`/available/${id}`);
    },
    nextAsset() {
      console.log('调用了nextAsset');
      this.showIndex = (this.showIndex + 1) % this.importantAsset.length;
      if (this.showIndex == 0) {
        this.showIndex = 1;
      }
    },
    backAsset() {
      this.showIndex =
        (this.showIndex - 1 + this.showAsset.length) %
        this.importantAsset.length;
      if (this.showIndex == 0) {
        this.showIndex = 1;
      }
    },
    nextUnAsset() {
      this.unShowIndex = (this.unShowIndex + 1) % this.unimportantAsset.length;
      if (this.unShowIndex == 0) {
        this.unShowIndex = 1;
      }
    },
    backUnAsset() {
      this.unShowIndex =
        (this.unShowIndex - 1 + this.showUnAsset.length) %
        this.unimportantAsset.length;
      if (this.unShowIndex == 0) {
        this.unShowIndex = 1;
      }
    },
    goToAsset(recommand) {
      this.$router.push({
        name: 'available',
        params: {
          recommand,
        },
      });
    },
  },
};
</script>

<style scoped>
.asset {
  padding: 0 8.5%;
  background: url('@/assets/image/module_bg.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.left-box {
  display: flex;
  margin: 4% 0;
}

.mid-box {
  display: flex;
  width: 3px;
  align-items: center;
}

.the-line {
  width: 0;
  height: 120px;
  border: 1px solid #000;
  opacity: 0.2;
}

.left-one {
  flex: 2;
  margin-right: 8px;
}

.left-two {
  display: flex;
  justify-content: space-between;
  flex: 6;
  height: 234px;
  /* background-color: #fff; */
}

.left-two-first {
  display: flex;
  width: 50%;
  flex-direction: column;
  cursor: pointer;
}

.left-two-first:hover {
  background-color: rgb(255, 255, 255);
}

.left-two-second {
  display: flex;
  width: 50%;
  flex-direction: column;
  cursor: pointer;
  /* background-color: blue; */
}

.left-two-second:hover {
  background-color: rgb(255, 255, 255);
}

.arrow {
}

.arrow > span {
  display: inline-block;
  margin-top: 30px;
  padding: 5px 5px;
  margin-right: 4px;
  background-color: #e60012;
  color: #fff;
  cursor: pointer;
}
.right-box {
  float: left;
  margin: 28px 0;
  /* background-color:pink; */
}

.location {
  height: 1.5rem;
  font-size: 1.2rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 6px 0;
  margin-right: 45%;
  color: #333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.right-box-one {
  padding: 0 35px;
}

.right-box > div {
  float: left;
}

.right-box-two {
  padding: 0 175px;
}

.right-box .box-last {
  float: right;
  margin: 0 60px;
}

.h2-title {
  font-size: 1.5rem;
  font-weight: 400;
  color: #958167;
  margin-top: 30px;
}

.more {
  font-size: 1rem;
  width: 80px;
  font-weight: 400;
  color: #e60012;
  margin-top: 102px;
  cursor: pointer;
}

.left-box .left-two .left-two-first h3,
.left-box .left-two .left-two-second h3 {
  height: 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: #333;
  margin-top: 30px;
}

.number-one {
  color: #e60012;
  margin-top: 9px;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 19px;
  font-family: Microsoft YaHei;
  margin-bottom: 20px;
}

.number-one span {
  font-size: 2.1rem;
  font-family: Arial;
  line-height: 42px;
  font-weight: 700;
}

.asset-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 20px;
}
</style>
