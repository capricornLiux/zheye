import { ref, onMounted, onUnmounted, Ref } from 'vue'

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false)

  const handler = (e: MouseEvent) => {
    console.log('e', e)
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        console.log('in')
        // 点击的是dropdown内部
        isClickOutside.value = false
      } else {
        console.log('out')
        // 点击的是dropdown外部
        isClickOutside.value = true
      }
    }
  }

  onMounted(() => {
    console.log('onMounted')
    document.addEventListener('click', handler)
  })

  onUnmounted(() => {
    console.log('onUnmounted')
    document.removeEventListener('click', handler)
  })

  return isClickOutside
}

export default useClickOutside
