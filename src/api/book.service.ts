import { Observable, of } from "rxjs";
import { ContentModel } from "../models/content.model";
import { ChapterModel } from "../models/chapter.model";

const chapters = [
  {
    bookId: 1,
    chapterId: 3,
    chapterName: '',
    text: 'kjdlf\n' +
      'sdkfmkkzdsnfl'
  }
];


export class BookService {
  getContents(bookId: number): Observable<ContentModel[]> {
    return of([
      {
        name: 'Пролог',
        id: 1,
        order: 1
      },
      {
        name: 'Часть 1',
        id: 2,
        order: 2,
        children: [
          {
            name: 'Глава 1',
            id: 3,
            order: 1
          },
          {
            name: 'Глава 2',
            id: 4,
            order: 2
          },
          {
            name: 'Глава 3',
            id: 5,
            order: 3
          },
          {
            name: 'Глава 4',
            id: 6,
            order: 4
          }
        ]
      },
      {
        name: 'Часть 2',
        id: 7,
        order: 3,
        children: [
          {
            name: 'Глава 5',
            id: 8,
            order: 1
          },
          {
            name: 'Глава 6',
            id: 9,
            order: 2
          },
        ]
      },
      {
        name: 'Часть 3',
        id: 10,
        order: 4
      }
    ])
  }


  getChapter(bookId: number, chapterId: number): Observable<ChapterModel> {
    return of(chapters.find((item => item.bookId === bookId && item.chapterId === chapterId)))
  }
}

