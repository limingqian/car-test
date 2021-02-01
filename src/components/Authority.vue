<script>
// import { check } from '../utils/auth';
// 权限组件
export default {
  functional: true,
  props: {
    authority: {
      type: Array,
      required: true
    }
  },
  render(h, context) {
    // const { props, scopedSlots } = context;
    const { scopedSlots } = context;
    // return check(props.authority) ? scopedSlots.default() : null;
    return scopedSlots.default();
  }
};
</script>
