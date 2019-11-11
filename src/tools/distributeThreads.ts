import { cpus } from 'os';
import IThreadsDistribution from '../interfaces/iThreadsDistribution';

const THREADS: number = cpus().length;

export default function (pages: number): IThreadsDistribution[] {
  let rest = pages % THREADS;
  const EachThreadWillReceive: IThreadsDistribution[] = [];

  if (rest !== 0) {
    const mostCloseInteger = Math.floor(pages / THREADS);

    for (let i = 0; i < THREADS; i++) {
      if (i === 0) {
        EachThreadWillReceive[i] = {
          end: mostCloseInteger + 1, // 1 do resto
          start: 1
        };
        rest--;
      } else {
        EachThreadWillReceive[i] = {
          end: EachThreadWillReceive[i - 1].end + mostCloseInteger,
          start: EachThreadWillReceive[i - 1].end + 1
        };

        if (rest > 0) {
          EachThreadWillReceive[i].end = EachThreadWillReceive[i].end + 1; // __1 do resto
          rest--;
        }
      }
    }

    return EachThreadWillReceive;
  }

  const pagePerThread = pages / THREADS;

  for (let i = 0; i < THREADS; i++) {
    if (i === 0) {
      EachThreadWillReceive[i] = {
        end: pagePerThread,
        start: 1
      };

    } else {
      EachThreadWillReceive[i] = {
        end: EachThreadWillReceive[i - 1].end + pagePerThread,
        start: EachThreadWillReceive[i - 1].end + 1
      };
    }
  }
  return EachThreadWillReceive;
}
