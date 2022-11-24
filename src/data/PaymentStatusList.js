export let template = {
  pending: [
    {
      id: 1,
      title: "Pending",
      className:
        "bg-statusGray max-h-[1.25rem] text-statusBlue text-center text-xs leading-[1.125rem] px-[0.625rem] rounded-[0.625rem]",
    },
  ],
  paid: [
    {
      id: 2,
      title: "Paid",
      className:
        "bg-statusGreen text-statusGreenDark text-center text-xs leading-[1.125rem] px-[0.625rem] rounded-[0.625rem]",
    },
  ],
  archived: [
    {
      id: 3,
      title: "Archived",
      className:
        "bg-statusGrayDark text-statusGreenGray text-center text-xs leading-[1.125rem] px-[0.625rem] rounded-[0.625rem]",
    },
  ],
  due: [
    {
      id: 4,
      title: "Due",
      className:
        "bg-statusOrange text-statusOrangeDark text-center max-h-[1.25rem] text-xs leading-[1.125rem] px-[0.625rem] rounded-[0.625rem]",
    },
  ],
  rejected: [
    {
      id: 4,
      title: "Rejected",
      className:
        "bg-statusRed text-statusRedDark text-center max-h-[1.25rem] text-xs leading-[1.125rem] px-[0.625rem] rounded-[0.625rem]",
    },
  ],
};
