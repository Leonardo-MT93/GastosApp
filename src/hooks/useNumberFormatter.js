
export const useNumberFormatter = () => {
  const formatNumber = (number) => {
    return number.toLocaleString('es-AR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return { formatNumber };
};
