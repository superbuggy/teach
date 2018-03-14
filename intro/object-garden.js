console.log('object-garden.js had been loaded!')

const messagePrompt = 'You will be working in the browser console for this exercise. Make sure you have your text editor open in the directory containing this exercise so you can look at the code while you work through the steps of the assignment.'

console.log(messagePrompt)

const garden = {
  archway: {
    description: 'You are standing at the entrance to a garden, before an archway overrun with flowers and vines. There is a path towards a fountain to your left, and a path that leads down a hill to your right, but you cannot tell where it leads.',
    fountain: {
      description: 'You are standing in front of the fountain, surrounded by a rainbow colored mist. The water looks and smells refreshing. Do you take a drink?',
      drinkTheWater: 'Staying hydrated is often said to be important, good choice. However, when you drink the water, you turn into a platypus. So there is that. You end up concluding that being a platypus is not that bad, despite your initial reservations. Not bad.'
      dontDrinkTheWater: 'You do not drink the water. That is totally ok. You eventually drink water and live the rest of your life.'
    },
    downTheHill: {
      description: 'You walk down the hill and find a bunch of horses playing cards and talking about reality television, but not in a fun way. They argue about the implications of reality television for society. Do you join in the argument?'
      argument: {
        yes: 'You enter the argument and convince everyone of your point. One of the horses is the CEO of an amazing startup and offers you a job. Sick!'
        no: 'You politely decline to offer your opinion, impressing the horses with your carefully considered neutrality. They immediate stop aruging and talk about gardening. One them mentions being the designer of the garden, which is impressive. You are still however perplexed by their apparent capacity for holding cards with opposable thumbs, but it is a pretty sharp bunch so you are not totally surprised.'
      }
    }
  }
}
