<template>
  <div class="position-relative">
     <div class="progressbar-container">
          <ul class="progressbar p-0 ms-2">
            <li v-for="(list, index) in stepBar" :key="index" :class="index <= step - 1 ? 'active' : ''">
                <span class="text-500 ms-3" :class="index <= step - 1 ? 'text-brand' : 'text-light-gray'">{{ list.name }}</span>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'ProgressBar',
        props: ['step-bar', 'step',]
    }
</script>

<style scoped>
.progressbar{
  counter-reset: step;
}
.progressbar li{
  display: flex;
  align-items: center;
  position: relative;
  list-style: none;
  padding-bottom: 40px;
}
.progressbar li:before{
  content:counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  border: 2px solid #e0e0e0;
  border-radius: 50%;
  font-size: 14px;
  line-height: 29px;
  background: #e0e0e0;
  color: #fff;
  text-align: center;
  font-weight: bold;
}
.progressbar li:after{
  content: '';
  position: absolute;
  width:2px;
  height: 100%;
  background: #e0e0e0;
  top: 17px;
  left: 14px;
  z-index: -1;
}
.progressbar li.active:before{
 border-color: var(--brandColor);
 background: var(--brandColor);
 color: white
}
.progressbar li.active:after{
 background: var(--brandColor);
}
.progressbar li.active li:after{
 background: var(--brandColor);
}
.progressbar li.active li:before{
border-color: var(--brandColor);
background: var(--brandColor);
color: white
}
.progressbar li:last-child:after{
 content: none;
}
</style>
