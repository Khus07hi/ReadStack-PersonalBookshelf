import Swal from "sweetalert2";

export const deleteOneItemAlert = (darkMode, item) =>
   Swal.fire(
      darkMode
         ? {
              width: "20rem",
              text: `Do you want to delete this ${item}?`,
              background: "#151519",
              color: "#c20aff",
              showCancelButton: true,
              confirmButtonColor: "#c20aff",
              cancelButtonColor: "#c20aff",
              confirmButtonText: "Yes, delete it!",
           }
         : {
              width: "20rem",
              text: `Do you want to delete this ${item}?`,
              background: "#ededed",
              color: "#5d0085",
              showCancelButton: true,
              confirmButtonColor: "#5d0085",
              cancelButtonColor: "#5d0085",
              confirmButtonText: "Yes, delete it!",
           }
   );

export const deleteOneItemConfirmed = (darkMode, item) =>
   Swal.fire(
      darkMode
         ? {
              width: "20rem",
              text: `The ${item} has been deleted.`,
              background: "#151519",
              color: "#c20aff",
              confirmButtonColor: "#c20aff",
           }
         : {
              width: "20rem",
              text: `The ${item} has been deleted.`,
              background: "#ededed",
              color: "#5d0085",
              confirmButtonColor: "#5d0085",
           }
   );

export const deleteAllItemsAlert = (darkMode, items) =>
   Swal.fire(
      darkMode
         ? {
              width: "22rem",
              text: `Do you want to delete all the ${items}?`,
              background: "#151519",
              color: "#c20aff",
              showCancelButton: true,
              confirmButtonColor: "#c20aff",
              cancelButtonColor: "#c20aff",
              confirmButtonText: "Yes, delete all!",
           }
         : {
              width: "22rem",
              text: `Do you want to delete all the ${items}?`,
              background: "#ededed",
              color: "#5d0085",
              showCancelButton: true,
              confirmButtonColor: "#5d0085",
              cancelButtonColor: "#5d0085",
              confirmButtonText: "Yes, delete all!",
           }
   );

export const deleteAllItemsConfirm = (darkMode, items) =>
   Swal.fire(
      darkMode
         ? {
              width: "20rem",
              text: `all the ${items} have been deleted.`,
              background: "#151519",
              color: "#c20aff",
              confirmButtonColor: "#c20aff",
           }
         : {
              width: "20rem",
              text: `all the ${items} have been deleted.`,
              background: "#ededed",
              color: "#5d0085",
              confirmButtonColor: "#5d0085",
           }
   );

export const deleteOneBookWithNoteAlert = (darkMode) =>
   Swal.fire(
      darkMode
         ? {
              width: "23rem",
              title: "This book have notes!",
              text: `Do you want to delete this book? notes will be deleted`,
              background: "#151519",
              color: "#c20aff",
              showCancelButton: true,
              confirmButtonColor: "#c20aff",
              cancelButtonColor: "#c20aff",
              confirmButtonText: "Yes, delete it!",
           }
         : {
              width: "23rem",
              title: "This book have notes!",
              text: `Do you want to delete this book? notes will be deleted`,
              background: "#ededed",
              color: "#5d0085",
              showCancelButton: true,
              confirmButtonColor: "#5d0085",
              cancelButtonColor: "#5d0085",
              confirmButtonText: "Yes, delete it!",
           }
   );

export const deleteAllBooksWithNoteAlert = (darkMode) =>
   Swal.fire(
      darkMode
         ? {
              width: "28rem",
              title: "There are books with notes!",
              text: `Do you want to delete all the books? notes will be deleted`,
              background: "#151519",
              color: "#c20aff",
              showCancelButton: true,
              confirmButtonColor: "#c20aff",
              cancelButtonColor: "#c20aff",
              confirmButtonText: "Yes, delete all!",
           }
         : {
              width: "28rem",
              title: ["There are books with notes!"],
              text: `Do you want to delete all the books? notes will be deleted`,
              background: "#ededed",
              color: "#5d0085",
              showCancelButton: true,
              confirmButtonColor: "#5d0085",
              cancelButtonColor: "#5d0085",
              confirmButtonText: "Yes, delete all!",
           }
   );

export const deleteAllArchivedBooksAlert = (darkMode) =>
   Swal.fire(
      darkMode
         ? {
              width: "28rem",
              title: "These books have notes!",
              text: `Do you want to delete all the books? notes will be deleted`,
              background: "#151519",
              color: "#c20aff",
              showCancelButton: true,
              confirmButtonColor: "#c20aff",
              cancelButtonColor: "#c20aff",
              confirmButtonText: "Yes, delete all!",
           }
         : {
              width: "28rem",
              title: "These books have notes!",
              text: `Do you want to delete all the books? notes will be deleted`,
              background: "#ededed",
              color: "#5d0085",
              showCancelButton: true,
              confirmButtonColor: "#5d0085",
              cancelButtonColor: "#5d0085",
              confirmButtonText: "Yes, delete all!",
           }
   );

export const archiveBookAlert = (darkMode) =>
   Swal.fire(
      darkMode
         ? {
              width: "22rem",
              text: `Do you want to archive this book?`,
              background: "#151519",
              color: "#c20aff",
              showCancelButton: true,
              confirmButtonColor: "#c20aff",
              cancelButtonColor: "#c20aff",
              confirmButtonText: "Yes, archive it!",
           }
         : {
              width: "22rem",
              text: `Do you want to archive this book?`,
              background: "#ededed",
              color: "#5d0085",
              showCancelButton: true,
              confirmButtonColor: "#5d0085",
              cancelButtonColor: "#5d0085",
              confirmButtonText: "Yes, archive it!",
           }
   );

export const archiveBookConfirm = (darkMode) =>
   Swal.fire(
      darkMode
         ? {
              width: "20rem",
              text: `The book has been archived.`,
              background: "#151519",
              color: "#c20aff",
              confirmButtonColor: "#c20aff",
           }
         : {
              width: "20rem",
              text: `The book has been archived.`,
              background: "#ededed",
              color: "#5d0085",
              confirmButtonColor: "#5d0085",
           }
   );

export const moveBackBookAlert = (darkMode) =>
   Swal.fire(
      darkMode
         ? {
              width: "22rem",
              text: `Do you want to move back this book to the current reading?`,
              background: "#151519",
              color: "#c20aff",
              showCancelButton: true,
              confirmButtonColor: "#c20aff",
              cancelButtonColor: "#c20aff",
              confirmButtonText: "Yes, move it back!",
           }
         : {
              width: "22rem",
              text: `Do you want to move back this book to the current reading?`,
              background: "#ededed",
              color: "#5d0085",
              showCancelButton: true,
              confirmButtonColor: "#5d0085",
              cancelButtonColor: "#5d0085",
              confirmButtonText: "Yes, move it back!",
           }
   );

export const moveBackBookConfirm = (darkMode) =>
   Swal.fire(
      darkMode
         ? {
              width: "20rem",
              text: `The book has been moved back to the current reading.`,
              background: "#151519",
              color: "#c20aff",
              confirmButtonColor: "#c20aff",
           }
         : {
              width: "20rem",
              text: `The book has been moved back to the current reading.`,
              background: "#ededed",
              color: "#5d0085",
              confirmButtonColor: "#5d0085",
           }
   );
