export function formatArrayParticipants(participants: string[]) {
  let tam = 0;
  let arrayFormatted = [];

  participants?.map((participant) => {
    arrayFormatted.push(
      tam < participants.length -2
        ? participant.concat(', ')
        : tam === participants.length -2
        ? participant.concat(' e ')
        : participant
    );

    tam++;
  });

  return arrayFormatted;
}
