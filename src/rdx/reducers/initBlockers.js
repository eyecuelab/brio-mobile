import "react-native-get-random-values";
import { v4 as v4 } from "uuid";

export default function initBlockers() {
  return {
    currentPoints: {
      exercise: 0,
      music: 0,
      social: 0,
    },
    blockers: [
      {
        category: "exercise",
        id: v4(),
        description: "Do you have running shoes?",
        createdAt: new Date(),
        completedAt: null,
        points: 10,
        suggestions: [
          {
            id: v4(),
            description: "Go for a 1 mile jog",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            id: v4(),
            description: "Go for a 3 mile run",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
          },
        ],
      },
      {
        category: "exercise",
        id: v4(),
        description: "Do you have a bike?",
        createdAt: new Date(),
        completedAt: null,
        points: 20,
        suggestions: [
          {
            id: v4(),
            description: "Go for a 1 mile bike",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            id: v4(),
            description: "Go for a 3 mile bike",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
          },
        ],
      },
      {
        category: "exercise",
        id: v4(),
        description: "Do you have a yoga mat?",
        createdAt: new Date(),
        completedAt: null,
        points: 30,
        suggestions: [
          {
            id: v4(),
            description: "Do 15 mins yoga",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            id: v4(),
            description: "Do 30 mins yoga",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
          },
        ],
      },
      {
        //maybe this should be do you have spotify on your phone? we can add download link to modal
        category: "music",
        id: v4(),
        description: "Play 10 songs.",
        createdAt: new Date(),
        completedAt: null,
        points: 10,
        apiEndpoint: "https://api.spotify.com/v1/me/player/recently-played",
        suggestions: [
          {
            id: v4(),
            description: "Play 5 songs.",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            id: v4(),
            description: "Play an entire album.",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
          },
        ],
      },
      {
        category: "music",
        id: v4(),
        description: "Are you following multiple artists?",
        createdAt: new Date(),
        completedAt: null,
        points: 20,
        suggestions: [
          {
            id: v4(),
            description:
              "Make a playlist of tracks from new artists you follow.",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            id: v4(),
            description: "Share a playlist you made via text.",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
          },
        ],
      },
      {
        category: "music",
        id: v4(),
        description: "Do you follow other users?",
        createdAt: new Date(),
        completedAt: null,
        points: 30,
        suggestions: [
          {
            id: v4(),
            description: "Follow another users playlist.",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            id: v4(),
            description: "Make a collaborative playlist with two friends.",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
          },
        ],
      },
      {
        category: "social",
        id: v4(),
        description: "Do you have a Meetup.com account?",
        createdAt: new Date(),
        completedAt: null,
        points: 10,
        suggestions: [
          {
            id: v4(),
            description: "Signup for a new Meetup group.",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            id: v4(),
            description: "Attend a Meetup event.",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
          },
        ],
      },
      {
        category: "social",
        id: v4(),
        description: "Do you know where your nearest post office box is?",
        createdAt: new Date(),
        completedAt: null,
        points: 20,
        suggestions: [
          {
            id: v4(),
            description: "Buy some stamps and envelopes",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            id: v4(),
            description: "Write a letter to a friend who lives far away.",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
          },
        ],
      },
      {
        category: "social",
        id: v4(),
        description: "Do you have a coffee shop you like?",
        createdAt: new Date(),
        completedAt: null,
        points: 30,
        suggestions: [
          {
            id: v4(),
            description:
              "Go to a coffee shop and say, “I like your shirt” to the barista",
            createdAt: new Date(),
            completedAt: null,
            points: 20,
          },
          {
            id: v4(),
            description: "Go to a coffee shop and make a new friend.",
            createdAt: new Date(),
            completedAt: null,
            points: 30,
          },
        ],
      },
    ],
  };
}
