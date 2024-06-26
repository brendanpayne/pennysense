// tailwindcss styles
export const styles = {
  hyperlink: 'text-primary font-bold opacity-100',
  onboard: {
    title: 'text-2xl font-iextrabold',
    desc: 'text-lg font-iregular'
  },

  form: {
    label: 'text-lg font-iregular',
    inputContainer: 'border-2 w-full rounded-xl h-14 px-4 focus:border-primary flex-row justify-between items-center',
    input: 'flex-1 text-base text-[16px] font-iregular h-full'
  },

  home: {
    title: 'text-2xl font-iextrabold',
    subtitle: 'text-md font-iregular',
    overview: {
      container: 'my-4 p-4 space-y-6 rounded-3xl bg-primary',
      title: 'text-xl font-ibold text-white',
      balance: 'text-3xl font-iextrabold text-white',
      content: 'text-white font-iregular'
    },
    budget: {
      container: 'my-4 p-4 space-y-4 rounded-2xl border-[1px] border-border',
      title: 'text-md font-iregular pt-4',
      subtitle: 'text-lg font-ibold',
      amount: 'text-2xl font-iextrabold text-primary',
      max: 'text-md font-iregular',
      content: 'font-iregular'
    }
  }
};