export default async function clipboardCopy(data: string) {
  try {
    await navigator.clipboard.writeText(data);
    alert('클립보드에 복사되었습니다.');
  } catch (e) {
    alert('복사에 실패하였습니다');
  }
}
