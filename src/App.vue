<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style >

/deep/ .uv-button{
  flex: none;
  width: auto;
}
/*每个页面公共css */
.flex-row{
  display: flex;
  justify-content: space-between;
}
.flex-col{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
